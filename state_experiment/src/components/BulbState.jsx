import React from "react";

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? `Bulb is ON ` : `Bulb is OF`}</div>;
}

export default BulbState;
