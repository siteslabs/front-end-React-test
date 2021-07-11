import axios from 'axios';
import { Dispatch } from 'react';
import { PostsActionsType, PostsActionType, IsinglePost, PostEditting } from '../types/postsType';
import { InewPost } from '../types/postsType';

export const url = 'https://simple-blog-api.crew.red';

export const fetchPosts = () => async (dispatch: Dispatch<PostsActionType>) => {
  try {
    dispatch({ type: PostsActionsType.FETCHING_POSTS });
    const response = await axios.get<IsinglePost[]>(`${url}/posts`);
    dispatch({ type: PostsActionsType.FETCHING_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: PostsActionsType.FETCHING_POSTS_ERROR, payload: 'Something went wrong' });
  }
};

export const createNewPost = (data: InewPost) => async (dispatch: Dispatch<PostsActionType>) => {
  try {
    dispatch({ type: PostsActionsType.CREATE_NEW_POST });
    await axios.post(`${url}/posts`, data);
    dispatch({ type: PostsActionsType.CREATE_NEW_POST_SUCCESS });
  } catch (error) {
    dispatch({ type: PostsActionsType.CREATE_NEW_POST_ERROR, payload: 'Something went wrong' });
  }
};

export const deletePost = (postId: string | string[] | undefined) => async (dispatch: Dispatch<PostsActionType>) => {
  try {
    await axios.delete(`${url}/posts/${postId}`);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (postId: number | null, data: InewPost) => async (dispatch: Dispatch<PostsActionType>) => {
  try {
    await axios.put(`${url}/posts/${postId}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const setPosts = (posts: IsinglePost[]) => ({ type: PostsActionsType.SET_POSTS, payload: posts });

export const setDataForEdittingAC = (body: string, title: string, id: number, isFetching: boolean): PostEditting => ({
  type: PostsActionsType.SET_DATA_FOR_EDITTING,
  payload: {
    body,
    title,
    id,
    isFetching,
  },
});
