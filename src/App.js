import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <TipCalculator />
    </div>
  );
};

function TipCalculator() {
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

function Bill({ bill, setBill }) {
  return (
    <div>
      <label>How much is the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, setTip, tip }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Disssapointed 0%</option>
        <option value="5">It is Okay 5%</option>
        <option value="10">Grat Job 10%</option>
        <option value="20">Amazing 20%</option>
      </select>
    </div>
  );
}
function Output({ bill, avarage, onReset }) {
  return (
    <div>
      <h2>
        You Pay ${bill + avarage} (${bill} + ${avarage}Tip)
      </h2>
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
export default App;
