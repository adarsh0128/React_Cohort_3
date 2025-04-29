import React from "react";

function Reset({ count, setCount }) {
  function countHandler() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={countHandler}>Reset</button>
    </div>
  );
}

export default Reset;
