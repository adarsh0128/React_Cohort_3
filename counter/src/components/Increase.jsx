import React from "react";

function Increase({ count, setCount }) {
  function countHandler() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <button onClick={countHandler}>Increase</button>
    </div>
  );
}

export default Increase;
