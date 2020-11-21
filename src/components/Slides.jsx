import React from "react";
import slides from "../data.js";
export default function   Slides(props){
  const {move,handle,handle1,h}=props;
  return (<>
<div>{
slides[move-1].text}</div>
<button data-testid="button-next" onClick={handle}></button>
<button data-testid="button-prev" onClick={handle1}></button>
<button data-testid="button-restart" onClick={h}></button>
</>)

}