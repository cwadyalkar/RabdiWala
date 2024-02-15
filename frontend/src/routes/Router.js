import React from 'react'
import { Routes, Route ,Navigate} from "react-router-dom";
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';


const Router = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigate to="/home"/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   </Routes>
  )
}

export default Router