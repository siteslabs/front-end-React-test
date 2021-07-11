import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { postsReducer } from '../reducers/postsReducer';

export const reducer = combineReducers({
  posts: postsReducer,
});

export type rootReducer = ReturnType<typeof reducer>;

export const typedSelector: TypedUseSelectorHook<rootReducer> = useSelector;
