import React from "react";
import { useState } from "react";
import CounterBox from "./CounterBox";
import SumCounter from "./SumCounter";

export default function AddCounter(props) {
  // const { num, setNum } = props;
  const [ num, setNum ] =useState(0);
  const [group, setGroup] = useState([]);
  const [startCount, setStartCount] = useState(0);

  function showCounterBox() {
    setGroup((current) => [...current, 0]);
  }  function handleCounting() {
    if (startCount) {
      clearInterval(startCount);
      setStartCount(0);
      return;
    }
    const startCountID = setInterval(() => {
      setNum((prevNum) => prevNum + 1);
    }, 1000) ;
    setStartCount(startCountID);
  }

  return (
    <>
      <div className="AddBtn">
        <button className="handleAdd" onClick={showCounterBox}>
          Add Counter
        </button>
        <div className="sumBtn">{num}</div>
        <div className="ArrBox">
          {group.map((val, index) => {
            return <CounterBox num={num} setNum={setNum}/>;
           
          })}
        </div>
      </div>
    </>
  );
}
