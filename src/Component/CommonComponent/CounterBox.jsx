import React, { useEffect } from 'react'
import { useState } from 'react'

export default function CounterBox() {
  const [num,setNum]=useState(0)
var start=false;


  function startCounting(){
    start=!start
    console.log(start);
    if(start===true){
      var roll= setInterval(() => {
        console.log("hello");
      }, 1000);  
    }else{
      roll.clearInterval()
    }
    // start=!true
    // if(!start){
    //   setNum(num+1)
    // }else{
    
    // }
    
  }
  
  return (
    <>
      <div className="counterBoxStart">
        <button className='CountButton'onClick={startCounting}>Start Counter</button>
        <div className="counterNumStart">
          <p className='showNum'>{num}</p>
        </div>
      </div>
    </>
  );
}
