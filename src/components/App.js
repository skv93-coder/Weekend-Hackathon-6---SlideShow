import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';
const Slides=(props)=>{
  const {move,handle,handle1,h}=props;
  return (<>
<div>{
slides[move-1].text}</div>
<button id="next" onClick={handle}></button>
<button id="prev" onClick={handle1}></button>
<button id="rest" onClick={h}></button>
</>)

}
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
