import classes from './MyModal.module.css';
import React from 'react'

function MyModal({children, visible, setVisible}) {
  const rootClassed = visible ? [classes.myModal ,classes.active].join(' ') : classes.myModal;

  return (
    <div className={rootClassed} onClick={evt => setVisible(false)}>
      <div className={classes.myModalContent} onClick={evt => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;
