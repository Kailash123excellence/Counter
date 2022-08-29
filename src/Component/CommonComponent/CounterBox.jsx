import React, { useState } from "react";

import SumCounter from "./SumCounter";

  
export default function CounterBox(props) {

  const [num, setNum] =useState(0)
  const [startCount, setStartCount] = useState(0);
  



  function handleCounting() {
    if (startCount) {
      clearInterval(startCount);
      setStartCount(0);
      return;
    }
    const startCountID = setInterval(() => {
      setNum((preNum) => preNum + 1);
    }, 1000);
    setStartCount(startCountID);
    
  }
  

  return (
    <>
      <div className="counterBoxStart">
        <button className="CountButton" onClick={handleCounting}>
          {startCount ? "Stop Counting" : "Start Counting"}
        </button>
        <p className="showNum">{num}</p>
      </div>
      

    </>
  );
}

