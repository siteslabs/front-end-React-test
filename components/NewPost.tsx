import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPost, setDataForEdittingAC, updatePost } from '../redux/action-creators/posts';
import { SFormWrapper, SButton, SPostsMainTitle } from '../styled-components/styled-posts';
import { checkValidate } from './validate';
import styles from '../styles/NewPost.module.css';
import { useRouter } from 'next/router';
import { typedSelector } from '../redux/reducers';

interface Props {}

export interface InewPostForm {
  title: string;
  body: string;
}
export interface InewPostFormValidate {
  title?: string;
  body?: string;
}

const NewPost = (props: Props) => {
  const emptyNewPostForm = {
    title: '',
    body: '',
  };
  const [newPostForm, setNewPostForm] = useState<InewPostForm>(emptyNewPostForm);
  const [error, setError] = useState<InewPostFormValidate>({});

  const dispatch = useDispatch();
  const route = useRouter();
  const { body, title, isEditting, id } = typedSelector((state) => state.posts.edittingPost);

  const newPostInputsChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name } = e.target;
    let newPost: any = { ...newPostForm };
    newPost[name] = value;

    setNewPostForm(newPost);
  };

  const newPostSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setError(checkValidate(newPostForm));

    if (Object.keys(error).length === 0) {
      if (isEditting) {
        dispatch(updatePost(id, newPostForm));
        dispatch(setDataForEdittingAC('', '', 0, false));
      } else {
        dispatch(createNewPost(newPostForm));
      }
      setNewPostForm(emptyNewPostForm);
      route.push('/posts');
    }
  };

  useEffect(() => {
    if (isEditting) {
      setNewPostForm({
        body,
        title,
      });
    }
  }, []);

  return (
    <div>
      <SPostsMainTitle>Add new post</SPostsMainTitle>
      <SFormWrapper>
        {/* Заголовок */}
        <label htmlFor="new_post_title">Title: </label>
        <input
          type="text"
          name="title"
          id="new_post_title"
          className={`${error.title ? styles.inputError : ''}`}
          placeholder="Title"
          value={newPostForm.title}
          onChange={newPostInputsChangeHandler}
        />
        {error.title && <p className={styles.textError}>required</p>}
        {/* text */}
        <label htmlFor="new_post_body">Text: </label>
        <textarea
          name="body"
          id="new_post_body"
          className={`${error.body ? styles.inputError : ''}`}
          placeholder="Text"
          value={newPostForm.body}
          onChange={newPostInputsChangeHandler}
        ></textarea>
        {error.body && <p className={styles.textError}>required</p>}
        <SButton onClick={newPostSubmitHandler} type="submit">
          {isEditting ? 'edit' : 'add'}
        </SButton>
      </SFormWrapper>
    </div>
  );
};

export default NewPost;
