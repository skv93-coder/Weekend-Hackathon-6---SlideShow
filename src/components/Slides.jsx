import React from "react";
import slides from "../data.js";
export default function   Slides(props){
  const {move,handle,handle1,h}=props;
  return (<>
  <h1 data-testid="title">
  {slides[move-1].title}
  </h1>
<p data-testid="text">{
slides[move-1].text}</p>
<button data-testid="button-next" onClick={handle}></button>
<button data-testid="button-prev" onClick={handle1}></button>
<button data-testid="button-restart" onClick={h}></button>
</>)

}