import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate()
  return (
    <div className='Header'>
        <h1 onClick={()=>navigate("/")}>Home </h1>
        <h2 onClick={()=>navigate("bookmark")}>Bookmarks </h2>
     </div>
  )
}

export default Header