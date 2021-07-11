import styled from 'styled-components';

// Posts
export const SPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const SSinglePost = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SPostsMainTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

export const SPostsTitle = styled.a`
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: blue;
  }
`;

export const SPostsBody = styled.p`
  margin-top: 10px;
  color: rgb(77, 77, 77);
  text-indent: 1.5rem;
`;

// Single Post
export const SPostWrapper = styled.div`
  width: 800px;
  margin: 50px auto;
  span {
    display: flex;
    justify-content: space-around;
    color: red;
  }
`;

export const SPostBody = styled(SPostsBody)`
  font-size: 1.2rem;
`;

// Create new post
export const SFormWrapper = styled.form`
  width: 800px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    font-size: 1.2rem;
  }
  input {
    padding: 10px;
    border: none;
    background-color: rgb(220, 225, 252);
    border-radius: 3px;
    margin: 10px 0;
  }
  textarea {
    padding: 10px;
    border: none;
    background-color: rgb(220, 225, 252);
    border-radius: 3px;
    margin: 10px 0;
    resize: none;
    height: 400px;
    max-width: 100%;
  }
  button {
    align-self: flex-end;
    width: 200px;
  }
`;
export const SButton = styled.button`
  padding: 10px 5px;
  width: 200px;
  max-width: 200px;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  color: ${(props) => props.color || 'white'};
  background-color: ${(props: { backgroundColor?: string }) => props.backgroundColor || 'rgb(7, 139, 248)'};
  margin-top: 20px;
  filter: brightness(90%);

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }
`;

export const SAddNewPostsButton = styled(SButton)`
  margin-bottom: 10px;
  margin-left: 10px;
`;
