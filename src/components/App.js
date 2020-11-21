import React, {Component, useState} from "react";
import '../styles/App.css';


const App = (props) => {
  const {slides}=props;
  const [slidesarr,setslidesarr]=React.useState(1);
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
    <h1 data-testid="title">
  {slides[slidesarr-1].title}
  </h1>
<p data-testid="text">{
slides[slidesarr-1].text}</p>
<button 
disabled={slidesarr!==1? true : false}
data-testid="button-next" onClick={handle}></button>
<button 
disabled={slidesarr!==slides.length? true : false}
data-testid="button-prev" onClick={handle1}></button>
<button data-testid="button-restart" 
disabled={slidesarr!==1? true : false}
onClick={h}></button>
    </>
  )
}


export default App;
