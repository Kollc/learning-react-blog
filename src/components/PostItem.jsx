import React from 'react'
import MyButton from './ui/button/MyButton';
import { useNavigate } from 'react-router-dom';

function PostItem({post, remove}) {
  const { title, description } = post;
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__text">
          <strong className="post__title">{post.id}. {title}</strong>
          <div>
            <p className="post__description">
              {description}
            </p>
          </div>
        </div>
        <div className="post__buttons">
          <MyButton className="post__btn post__delete" onClick={() => remove(post)}>Delete this post</MyButton>
          <MyButton className="post__btn post__open" onClick={() => navigate(`/posts/${post.id}`)}>Open this post</MyButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem;
