import React, {useEffect} from "react";
import {useState} from "react";
import "./Counter.css";
const Counter = () => {
let [count,setCount] = useState(0);

const increase = () =>{
    setCount(count = count+1)
    console.log("running")
}
const decrease = ()=>{
    if(count > 0){
    setCount(count = count-1)
}
}
const reset = ()=>{
    setCount(0)
}
  return (
    <div className="container">
        <h1>COUNTER</h1>
        <h1 className="count">{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <div className="resetBox"> 
        <button onClick={reset}className="reset">Reset</button>
         </div>
    </div>
  )
}

export default Counter