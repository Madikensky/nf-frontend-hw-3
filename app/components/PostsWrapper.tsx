'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostEntity from './PostEntity';
import Link from 'next/link';

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

interface PostsData {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

const PostWrapper = () => {
  const [data, setData] = useState<PostsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = (
        await axios.get('https://dummyjson.com/posts?limit=10')
      ).data;
      setData(postsData);
    };

    fetchData();
  }, []);

  if (data !== null) {
    console.log(data.posts);
  }
  return (
    <div className="flex items-center flex-col mt-20 gap-10 py-6">
      {data?.posts.map(
        ({ body, reactions, tags, title, userId, views }, id) => (
          <Link
            key={id}
            href={`/posts/${id + 1}`}
            className="flex justify-center"
          >
            <PostEntity
              key={id}
              description={body}
              reactions={reactions}
              tags={tags}
              title={title}
              userId={userId}
              views={views}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default PostWrapper;
