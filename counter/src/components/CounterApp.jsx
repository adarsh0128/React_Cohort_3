import React from "react";
import Increase from "./Increase";
import Decrease from "./Decrease";
import Reset from "./Reset";
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
      <Reset count={count} setCount={setCount} />
    </div>
  );
}

export default CounterApp;
