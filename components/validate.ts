import { InewPostForm, InewPostFormValidate } from './NewPost';

export const checkValidate = (value: InewPostForm): InewPostFormValidate => {
  const error: InewPostFormValidate = {};

  if (!value.title) {
    error.title = 'обязательное поле';
  }
  if (!value.body) {
    error.body = 'обязательное поле';
  }

  return error;
};
