import React, { useState } from 'react'
import MyButton from './ui/button/MyButton';
import MyInput from './ui/input/MyInput';

function PostForm({create}) {
  const [post, setPost] = useState(
    {
      title: '',
      description: ''
    }
  );

  // const description = useRef();

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', description: '' });
  }

  return (
    <form>
      {/* Управляемый компонент*/}
      <MyInput type="text" placeholder={"title"} value={post.title} onChange={evt => setPost({ ...post, title: evt.target.value })} />
      <MyInput type="text" placeholder={"description"} value={post.description} onChange={evt => setPost({ ...post, description: evt.target.value })} />
      {/*Не Управляемый компонент*/}
      {/* <MyInput type="text" placeholder={"description"} ref={description}/> */}
      <MyButton onClick={addNewPost}>Добавить пост!</MyButton>
    </form>
  )
}

export default PostForm
