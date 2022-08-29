import React, { useState } from "react";

export default function SumCounter(props) {
 const {number,setNumber}=props
 const [total,setTotal]=useState(0)

  return (
    <div className="sumBtn">{number}</div>
  )
}
