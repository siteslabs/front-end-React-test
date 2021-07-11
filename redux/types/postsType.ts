export enum PostsActionsType {
  FETCHING_POSTS = 'FETCHING_POSTS',
  FETCHING_POSTS_SUCCESS = 'FETCHING_POSTS_SUCCESS',
  FETCHING_POSTS_ERROR = 'FETCHING_POSTS_ERROR',
  SET_POSTS = 'SET_POSTS',
  // NEW POST
  CREATE_NEW_POST = 'CREATE_NEW_POST ',
  CREATE_NEW_POST_SUCCESS = 'CREATE_NEW_POST_SUCCESS ',
  CREATE_NEW_POST_ERROR = 'CREATE_NEW_POST_ERROR ',
  // POST EDITTING
  SET_DATA_FOR_EDITTING = 'SET_DATA_FOR_EDITTING',
}

interface FetchPostsAction {
  type: PostsActionsType.FETCHING_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostsActionsType.FETCHING_POSTS_SUCCESS;
  payload: IsinglePost[];
}
interface FetchPostsErrorAction {
  type: PostsActionsType.FETCHING_POSTS_ERROR;
  payload: string;
}
interface SetPosts {
  type: PostsActionsType.SET_POSTS;
  payload: IsinglePost[];
}

// NEW POST
interface CreateNewPost {
  type: PostsActionsType.CREATE_NEW_POST;
}
interface CreateNewPostSuccess {
  type: PostsActionsType.CREATE_NEW_POST_SUCCESS;
}
interface CreateNewPostError {
  type: PostsActionsType.CREATE_NEW_POST_ERROR;
  payload: string;
}

// POST EDITTING
export interface PostEditting {
  type: PostsActionsType.SET_DATA_FOR_EDITTING;
  payload: IsinglePost;
}

export type PostsActionType =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | SetPosts
  | CreateNewPost
  | CreateNewPostSuccess
  | CreateNewPostError
  | PostEditting;

export interface InewPost {
  title: string;
  body: string;
}

// State Type
export interface IsinglePost extends InewPost {
  id: number;
  isFetching?: boolean;
}

interface InewPostState {
  loading: boolean;
  error: boolean | string;
  success: boolean;
}

interface IedittingPost extends InewPost {
  isEditting: boolean;
  id: number | null;
}

export interface IinittialState {
  posts: IsinglePost[];
  loading: boolean;
  error: string | null;
  newPost: InewPostState;
  edittingPost: IedittingPost;
}
