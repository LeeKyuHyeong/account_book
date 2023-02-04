import { Link } from "react-router-dom";
import { React, useState } from "react";
import '../styles/common/Nav.css';

const Nav = () => {
  const [isOpen, setOpen] = useState("false");

  const acitveToggle = () => {
    setOpen(!isOpen);
  }
  return (
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <div className="navbar_logo">
        <i></i>
        <Link to="#" className="navbar_a">falsebon</Link>
      </div>

      <ul className="navbar_menu">
        <li>
          <Link to="#" className="navbar_a">내정보</Link>
        </li>
        <li>
          <Link to="#" className="navbar_a">가계부</Link>
        </li>
        <li>
          <Link to="#" className="navbar_a">게시판</Link>
        </li>
        <li>
          <Link to="#" className="navbar_a">설정</Link>
        </li>
        <li>
          <Link to="#" className="navbar_a"></Link>
        </li>
      </ul>

      <div className="navbar_login">
        <button>로그인</button>
      </div>

      <div className="toggle" onClick={acitveToggle}></div>
    </nav>
  )
}

export default Nav;