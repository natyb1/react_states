import React, { useState } from "react";
import { Bill } from "./Bill";
import { SelectPercentage } from "./SelectPercentage";
import { Output } from "./Output";
import { Reset } from "./Reset";

export function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState("");
  const [tip2, setTip2] = useState("");
  const avarage = (bill * (tip1 + tip2)) / 2 / 100;

  function handleClick() {
    setBill("");
    setTip1("");
    setTip2("");
  }
  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <SelectPercentage tip={tip1} setTip={setTip1}>
        How Much do You Like The service ?
      </SelectPercentage>

      <SelectPercentage tip={tip2} setTip={setTip2}>
        How Much does Your friend Like The service?
      </SelectPercentage>
      {bill && (
        <>
          {" "}
          <Output bill={bill} avarage={avarage} />
          <Reset onReset={handleClick} />{" "}
        </>
      )}
    </>
  );
}
