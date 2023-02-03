import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num+1);
  }
  const decrease = () => {
    if(num === 0) {
      alert('0미만으로는 안내려갑니다.');
      return;
    }
    setNum(num-1);
  }

  return (
    <div className="num">
      <button onClick={decrease}>-</button>
      <p>{num}</p>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter;