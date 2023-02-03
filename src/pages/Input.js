import React, { useState } from "react";

const Input = () => {
  const [val, setVal] = useState("");

  const onchange = (e) => {
    setVal(e.target.value);
  }  

  return (
    <div>
      <input type="text" value={val} onChange={onchange} />
      <br /><br /><br />
      <span>{val}</span>
    </div>
  )
}

export default Input;