import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';
import Slides from "./Slides";
const App = () => {
  const [slidesarr,setslidesarr]=useState(1);
  const handle=()=>{
    if(slidesarr===slides.length){
      return;
    }
   
    const copyslidesarr=slidesarr+1;
setslidesarr(copyslidesarr);
  }
   const handle1=()=>{
      if(slidesarr===1){
        return;
      }
      let a=slidesarr-1;
      setslidesarr(a);
    }
    const h=()=>{
      setslidesarr(1);
    }
  return (
    <>
  <Slides slides={slides} handle1={handle1} h={h} handle={handle} move={slidesarr}/>
    </>
  )
}


export default App;
