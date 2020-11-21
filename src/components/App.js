// import React, {Component, useState} from "react";
// import '../styles/App.css';


// const App = (props) => {
//   const {slides}=props;
//   const [slidesarr,setslidesarr]=React.useState(1);
//   const handle=()=>{
//     if(slidesarr===slides.length){
//       return;
//     }
   
//     const copyslidesarr=slidesarr+1;
// setslidesarr(copyslidesarr);
//   }
//    const handle1=()=>{
//       if(slidesarr===1){
//         return;
//       }
//       let a=slidesarr-1;
//       setslidesarr(a);
//     }
//     const h=()=>{
//       setslidesarr(1);
//     }
//   return (
//     <>
// <h1 data-testid="title">{props.slides[slidesarr-1].title}</h1>
// <p data-testid="text">{
// slides[slidesarr-1].text}</p>
// <button 
// disabled={slidesarr!==1? true : false}
// data-testid="button-next" onClick={handle}></button>
// <button 
// disabled={slidesarr!==slides.length? true : false}
// data-testid="button-prev" onClick={handle1}></button>
// <button data-testid="button-restart" 
// disabled={slidesarr!==1? true : false}
// onClick={h}></button>
//     </>
//   )
// }

import React from "react";
import "../styles/App.css";

const App = (props) => {
  let [current, SetCurrent] = React.useState(0);
  return (
    <>
      <h1 data-testid="title">{props.slides[current].title}</h1>
      <p data-testid="text">{props.slides[current].text}</p>
      <button
        data-testid="button-restart"
        onClick={() => SetCurrent(0)}
        disabled={current === 0 ? true : false}
      >
        Restart
      </button>
      <button
        data-testid="button-next"
        onClick={() => SetCurrent(current + 1)}
        disabled={current === props.slides.length - 1 ? true : false}
      >
        Next
      </button>
      <button
        data-testid="button-prev"
        onClick={() => SetCurrent(current - 1)}
        disabled={current === 0 ? true : false}
      >
        Prev
      </button>
    </>
  );
};

export default App;
