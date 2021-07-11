import React from 'react';
import { IsinglePost } from '../redux/types/postsType';
import Link from 'next/link';
import { SPostsBody, SPostsTitle } from '../styled-components/styled-posts';

interface IPost {
  post: IsinglePost;
}

const Post: React.FC<IPost> = ({ post }) => {
  const { body, id, title } = post;
  const maxLengthOfTitle = 50;
  const maxLengthOfBody = 200;

  return (
    <div>
      <Link href={`posts/${id}`}>
        <SPostsTitle>
          {title && title.substring(0, maxLengthOfTitle) + (title.length > maxLengthOfTitle ? '...' : '')}
        </SPostsTitle>
      </Link>
      <SPostsBody>
        {body && body.substring(0, maxLengthOfBody) + (body.length > maxLengthOfBody ? '...' : '')}
      </SPostsBody>
    </div>
  );
};

export default Post;
