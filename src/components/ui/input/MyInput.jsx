import React from 'react'
import classes from './MyInput.module.css';

const Mynput = React.forwardRef(({placeholder, ...props}, ref) => {
  return (
    <input ref={ref} className={classes.MyInp} type="text" placeholder={placeholder} {...props}/>
  )
});

export default Mynput;
