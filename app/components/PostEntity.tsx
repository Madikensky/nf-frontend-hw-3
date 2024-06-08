import React from 'react';
import Image from 'next/image';

interface PostProps {
  key: number;
  description: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
  title: string;
  userId: number;
  views: number;
}

const PostEntity: React.FC<PostProps> = ({
  description,
  reactions,
  tags,
  title,
  userId,
  views,
}) => {
  return (
    <div className="border-2 rounded-lg w-9/12 flex flex-col gap-6 p-6">
      <div className="text-4xl">
        <strong className="text-4xl">User: {userId}</strong>&nbsp;in&nbsp;
        <strong className="text-4xl">&quot;{title}&quot;</strong>
      </div>
      <div>{description}</div>
      <div>
        {tags.map((e, id) => (
          <span key={id} className="mr-4 rounded-3xl p-2 bg-gray-200">
            {e}&nbsp;
          </span>
        ))}
      </div>
      <div>
        <strong>Views:</strong> {views} {/* add like, dislike */}
      </div>
      <div className="flex gap-5 flex-row">
        <div className="flex gap-1 items-center">
          <Image src="/like.png" alt="like-btn" width={25} height={20} />{' '}
          {reactions.likes}
        </div>

        <div className="flex gap-1 items-center">
          <Image src="/dislike.png" alt="like-btn" width={25} height={20} />{' '}
          {reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default PostEntity;
