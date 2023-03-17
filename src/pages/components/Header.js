import React from 'react';
import './Header.css';
import {useSelector} from"react-redux";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

function Header() {
    const navigate=useNavigate()
    const {cardQoute}=useSelector((state)=>state.card)
  return (
    <div className='Header'>
        <h1 onClick={()=>navigate("/")}>Home </h1>
        <div onClick={()=>navigate("bookmark")}className='bookmark-nav'>
        <h2 >Bookmarks </h2>
        <Badge badgeContent={cardQoute.length} color="primary">
      <BookmarkAddIcon className="Bookmark-Icon"  />
    </Badge>
    </div>
     </div>
  )
}

export default Header