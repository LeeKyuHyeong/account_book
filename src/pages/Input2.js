import React, { useState } from "react";

const Input2 = () => {
  
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const onchange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs,
      [id]: value
    })
  }

  return (
    <div>
      <div className="input">
        <label>이름</label>
        <input type="text" id="name" value={inputs.name} onChange={onchange}/>
      </div>
      <div className="input">
        <label>이메일</label>
        <input type="email" id="email" value={inputs.email} onChange={onchange}/>
      </div>
      <div className="input">
        <label>번호</label>
        <input type="tel" id="tel" value={inputs.tel} onChange={onchange}/>
      </div>
      <div className="show">
        <span>{inputs.name}</span>
        <span>{inputs.email}</span>
        <span>{inputs.tel}</span>
      </div>
    </div>
  )
}

export default Input2;