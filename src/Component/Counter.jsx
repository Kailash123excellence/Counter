import React, { useState } from "react";
import AddCounter from "./CommonComponent/AddCounter";
import CounterBox from "./CommonComponent/CounterBox";
import SumCounter from "./CommonComponent/SumCounter";

export default function Counter() {
  // const [num, setNum] = useState(0);
  const [countCut,setCountCut]=useState(false)

 
  return (
    <>
      <div className="CounterMain fixedTop">
        <AddCounter />
        {/* <SumCounter num={num} /> */}
      </div>

    
      {/* <CounterBox num={num} setNum={setNum}/> */}
    
    </>
  );
}
