import React from "react";

function Decrease({ count, setCount }) {
  function countHandler() {
    setCount((count) => count - 1);
  }

  return (
    <div>
      <button onClick={countHandler}>Decrease</button>
    </div>
  );
}

export default Decrease;
