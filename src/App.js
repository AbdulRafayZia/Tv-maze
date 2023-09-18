import "./App.css";
import About from "./pages/about";


import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './app/slice';
import Content from "./components/content/content";

function App() {
const dispatch=useDispatch()
const {isLoading, error}=useSelector((state)=>state.ApiSlice)


useEffect(()=>{
  dispatch(fetchData());

},[])
if(error){
  console.log("errror");
}
if(isLoading){
  return(
  <>
  loading
  </>
  )
}
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/:id" element={<About/>}/> 
       

      </Routes>
    </BrowserRouter>
   
   
   </>
  );
}

export default App;
