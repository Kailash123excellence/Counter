import React from "react";
import { useState } from "react";
import CounterBox from "./CommonComponent/CounterBox";
import SumCounter from "./CommonComponent/SumCounter";

export default function AddCounter(props) {
  const [num, setNum] = useState(0);
  const [group, setGroup] = useState([]);

  

  function showCounterBox() {
    setGroup((current) => [...current, 0]);

  }

 
  return (
    <>
      <div className="AddBtn">
        <div className="CounterMain fixedTop">
          <button className="handleAdd" onClick={showCounterBox}>
            Add Counter
          </button>
          <div className="sumBtn">{num}</div>
          {/* <SumCounter number={number}/> */}
        </div>
      </div>

      <div className="ArrBox">
        {group.map((val, index) => {
          return <CounterBox num={num} setNum={setNum}  />;
        })}
      </div>
    </>
  );
}
