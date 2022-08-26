import React, { useState } from "react";
import { useEffect } from "react";

export default function SumCounter(props) {
  const { num } = props;

  return <div className="sumBtn">{num}</div>;
}
