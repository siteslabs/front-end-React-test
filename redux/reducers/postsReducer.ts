import { PostsActionType, IinittialState, PostsActionsType } from './../types/postsType';

const inittialState: IinittialState = {
  posts: [],
  error: null,
  loading: true,
  newPost: {
    loading: false,
    error: false,
    success: false,
  },
  edittingPost: {
    body: '',
    title: '',
    isEditting: false,
    id: null,
  },
};

export const postsReducer = (state = inittialState, action: PostsActionType): IinittialState => {
  switch (action.type) {
    case PostsActionsType.FETCHING_POSTS:
      return { ...state, loading: true };

    case PostsActionsType.FETCHING_POSTS_SUCCESS:
      return { ...state, posts: action.payload };

    case PostsActionsType.FETCHING_POSTS_ERROR:
      return { ...state, error: action.payload };

    case PostsActionsType.SET_POSTS:
      return { ...state, posts: action.payload };

    // NEW POST

    case PostsActionsType.CREATE_NEW_POST:
      return { ...state, newPost: { ...state.newPost, loading: true } };

    case PostsActionsType.CREATE_NEW_POST_SUCCESS:
      return { ...state, newPost: { ...state.newPost, loading: false } };

    case PostsActionsType.CREATE_NEW_POST_ERROR:
      return { ...state, newPost: { ...state.newPost, loading: false, error: action.payload } };

    // POST EDITTING

    case PostsActionsType.SET_DATA_FOR_EDITTING:
      return {
        ...state,
        edittingPost: {
          ...state.edittingPost,
          body: action.payload.body,
          title: action.payload.title,
          isEditting: true,
          id: action.payload.id,
        },
      };

    default:
      return inittialState;
  }
};
