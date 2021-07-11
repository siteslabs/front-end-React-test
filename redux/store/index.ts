import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from '../reducers/postsReducer';

const reducer = combineReducers({
  posts: postsReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const makeStore: MakeStore<any> = (context: Context) => createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export const wrapper = createWrapper<any>(makeStore, { debug: true });
