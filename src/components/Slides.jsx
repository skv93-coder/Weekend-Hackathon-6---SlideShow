import React from "react";
import slides from "../data.js";
export default function   Slides(props){
  const {move,handle,handle1,h}=props;
  return (<>
<div>{
slides[move-1].text}</div>
<button id="button-next" onClick={handle}></button>
<button id="button-prev" onClick={handle1}></button>
<button id="button-restart" onClick={h}></button>
</>)

}