import React, {Component, useState} from "react";
import '../styles/App.css';


const App = (props) => {
  const {slides}=props;
  const [idx,setidx]=React.useState(0);
  

  return (
    <>
    <h1 data-testid="title">{slides[idx].title}</h1>
    <p data-testid="text">{slides[idx].text}</p>
    <button data-testid="button-restart" disabled={idx===0?true:false} onClick={()=>setidx(0)}>Restart</button>
    <button data-testid="button-next" disabled={idx+1===slides.length?true:false} onClick={()=>setidx(idx+1)}>Next</button>
    <button data-testid="button-prev" disabled={idx===0?true:false} onClick={()=>setidx(idx-1)}>Prev</button>


    </>
  )
}
export default App;