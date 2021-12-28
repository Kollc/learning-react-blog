import React from 'react'
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

function PostsList({posts, title, remove}) {

  if(!posts.length) {
    return (
    <h1 styles={{textAlign: 'center', marginTop: '50px'}}>
      Постов нету , нужно добавить!
    </h1>
    );
  }

  return (
    <div className="post-list">
      <h1 className="post-list__title">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post__item"
          >
            <PostItem remove={remove} post={post} number={index + 1}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostsList;
