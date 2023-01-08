import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Bookmark from './pages/Bookmark';
import Header from './pages/components/Header';
import Home from './pages/Home';


function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
     
 
    <Route path="/" element={<Home/>}/>
    <Route path="bookmark" element={<Bookmark/>}/>
    
    </Routes>
     </div>
     </BrowserRouter>
  );
}

export default App;
