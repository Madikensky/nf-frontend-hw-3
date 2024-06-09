'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import PostEntity from '@/app/components/PostEntity';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

function Post({
  params,
}: {
  params: {
    post: string;
  };
}) {
  const [postData, setPostData] = useState<Post | null>(null);
  const { post } = params;
  useEffect(() => {
    const fetchData = async () => {
      const postData = await axios.get(`https://dummyjson.com/posts/${post}`);
      setPostData(postData.data);
    };
    fetchData();
  }, [post]);

  if (postData) {
    console.log(postData);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center flex-col gap-10">
        {postData ? (
          <PostEntity
            key={parseInt(post)}
            description={postData.body}
            reactions={postData.reactions}
            tags={postData.tags}
            title={postData.title}
            userId={postData.userId}
            views={postData.views}
          />
        ) : (
          <div>Loading</div>
        )}
        <Link href="/posts" className="cursor-pointer">
          &lt;- Go Back
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
