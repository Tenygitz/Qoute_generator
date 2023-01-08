import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {useDispatch} from"react-redux";
import {useSelector} from"react-redux";
import {addQoute,addAuthor} from "../redux/card";
import Loader from './components/Loader';
import "./Home.css";


function Home() {
    const [input,setInput]=useState([])
    const [loading,setLoading]=useState(true)
    const {cardQoute}=useSelector((state)=>state.card)
    const {cardAuthor}=useSelector((state)=>state.card)
    const dispatch=useDispatch()
    console.log("reduxqoutes",cardQoute);
    console.log("reduxauthor",cardAuthor);
    const [api,setApi]=useState([])
    const [tags,setTags]=useState([])
    
    useEffect(() => {
        axios.get('https://api.quotable.io/random')
        .then(response => {
          console.log("api",response.data);
          setApi(response.data)
          setLoading(false)
         
        })
        .catch(error => {
          console.log(error);
        });
        tagsHandler()
    },[] )
    const randomHandler=async()=>{
        const res = await axios.get('https://api.quotable.io/random')
        
          console.log(res.data);
          setApi(res.data)
        
    }
    const tagsHandler=async()=>{
        const res = await axios.get('https://api.quotable.io/tags')
        
          console.log('tags',res.data);
          setTags(res.data)
        
    }
    const bookmarkHandler=()=>{
        dispatch(addQoute(api.content))
          dispatch(addAuthor(api.author))
          const data = [...input,(api._id)];
          setInput(data)
          localStorage.setItem("id",JSON.stringify(data))
    }
    useEffect(()=>{
      const getInput=JSON.parse(localStorage.getItem("id"))
      console.log("localstorage",getInput)
      if(getInput){
       setInput(getInput)
      }
      setInput("")
     },[])
  
  return !loading ? (
    
    <div className='Home'>
 
     <div className='Card'>
        <div className='Card-Info'>
            <p>" {api.content} "</p>
        </div>
        <div className='Card-Infos'>
            <h3>- {api.author}</h3>
            <BookmarkAddIcon className="Bookmark-Icon" onClick={bookmarkHandler}/>
        </div>
     </div>
    
     <div className='Input-Container'>
       
     
     <select data-toggle="dropdown"	name="tags" onClick={tagsHandler} >
     {tags.map((item)=><option >{item.name}</option>
     )}
     </select>
     <button onClick={randomHandler}>Next qoutes</button></div>
    </div>
  ): <Loader/>;
}

export default Home