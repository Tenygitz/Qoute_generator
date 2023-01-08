import React,{useState,useEffect} from 'react';
import {useSelector} from"react-redux";
import FlipMove from 'react-flip-move';
import "./Bookmark.css";

function Bookmark() {
    const [posts,setPosts]=useState([])
    const {cardQoute}=useSelector((state)=>state.card)
    const {cardAuthor}=useSelector((state)=>state.card)
    useEffect(() => {
      setPosts(
        cardQoute.map((quote, index) => ({
          quote,
          author: cardAuthor[index]
        }))
      );
    }, [])
    
    
      console.log("post",posts)
  return (
    <div className="Bookmark">
  {posts.length===0?(<>
       <h1> Bookmark is empty</h1>
       <p>Plese click Bookmark button on homepage to see  your Favourites</p>
       </>
  ):(
          <FlipMove>
       {posts?.map(({ quote, author }) => (
        
    <div className="Cards">
     
          <div className="Cards-Info">
            <p>" {quote} "</p>
          </div>
          <div className="Cards-Infos">
            <h3>- {author}</h3>
          </div>
       
      
    </div>
    ))}
    </FlipMove>)}
  </div>
  )
}

export default Bookmark