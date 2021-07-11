import axios from 'axios';
import React from 'react';
import { deletePost, setDataForEdittingAC, url } from '../../../redux/action-creators/posts';
import { IsinglePost } from '../../../redux/types/postsType';
import { useRouter } from 'next/router';
import { SPostWrapper, SPostsMainTitle, SPostBody, SButton } from '../../../styled-components/styled-posts';
import { useDispatch } from 'react-redux';

interface SinglePostProps {
  post: IsinglePost;
}

type contextType = { params?: { postId: string } };

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { postId } = router.query;

  const deletePostHandler = async (id: string | string[] | undefined) => {
    dispatch(deletePost(id));
    router.replace('/posts');
  };

  const editPostHandler = async () => {
    dispatch(setDataForEdittingAC(post.body, post.title, post.id, true));
    router.replace('/posts/new');
  };

  return (
    <SPostWrapper>
      <SPostsMainTitle>{post.title}</SPostsMainTitle>
      <SPostBody>{post.body}</SPostBody>
      <span>
        <SButton onClick={() => deletePostHandler(postId)} backgroundColor={'red'}>
          Delete
        </SButton>
        <SButton onClick={() => editPostHandler()} backgroundColor={'blue'}>
          Edit
        </SButton>
      </span>
    </SPostWrapper>
  );
};

export async function getStaticPaths() {
  const response = await axios.get(`${url}/posts`);
  const data = await response.data;

  const paths = data.map((post: IsinglePost) => {
    return { params: { postId: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: contextType) {
  const postId = context.params?.postId;
  const response = await axios.get(`${url}/posts/${postId}`);
  const data = response.data;

  return {
    props: {
      post: data,
    },
  };
}
export default SinglePost;
