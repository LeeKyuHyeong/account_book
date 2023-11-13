/* eslint-disable */

import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import './styles/common/App.css';
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './pages/List';

function App() {

  const ViewNotice = ({ noticeData }) => {
    return (
      <div key={noticeData.idx}>
        <h2>{noticeData.idx}. {noticeData.title}</h2>
        <p>{noticeData.content}</p>
        {/* <tr key={userData}>
          <td>{userData.name}</td>
          <td>{userData.email}</td>
        </tr> */}
      </div>
    )
  }

  let [notice, setNotice] = useState(
    [
      {
        idx: 1,
        'title': '공지사항 첫번째',
        'content': '이것저것 지키세요'
      },
      {
        idx: 2,
        'title': '공지사항 두번째',
        'content': '이것저것 지키세요 제발'
      }
    ]
  );

  function 내용바꾸기() {
    let newArr = [...notice];
    if (newArr[0].content.includes('수정')) {
      newArr[0].content = '이것저것 돌아오기~';
    } else {
      newArr[0].content = '수정된 내용입니다.';
    }
    setNotice(newArr);
  }

  return (
    <div className="App">
      <Nav />
      <List />
      <div className="notice">
        <button onClick={내용바꾸기}>버튼</button>
        {notice.map(e => <ViewNotice noticeData={e} />)}
      </div>
      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;