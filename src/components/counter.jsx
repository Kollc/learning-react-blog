import React, { useState } from 'react'

const Cunter = () => {
  const [count, setCount] = useState(0);

  const incClickHandler = () => {
    setCount(count + 1);
  }

  const decClickHandler = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={incClickHandler}>Inc</button>
      <button onClick={decClickHandler}>Dec</button>
    </div>
  )
}

export default Cunter;
