import { React } from "react";
import "../styles/common/List.css";

const User = ({ userData }) => {
  return (
    <tr key={userData}>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  )
}

const List = () => {
  const users = [
    { email: 'ryu@gmail.com', name: '유재석' },
    { email: 'kim@gmail.com', name: '김종국' },
    { email: 'ha@gmail.com', name: '하하' },
    { email: 'song@gmail.com', name: '송지효' },
    { email: 'jeon@gmail.com', name: '전소민' }
  ];


  return (
    <div className="userTbl">
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <User userData={user} />)}
        </tbody>
        <div className="btn">변경</div>
      </table>
    </div>
  )
}

export default List;