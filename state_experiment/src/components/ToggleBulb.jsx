import React from "react";

function ToggleBulb({ bulbOn, setBulbOn }) {
  function togglebutton() {
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <button onClick={togglebutton}>Toggle the Button</button>
    </div>
  );
}

export default ToggleBulb;
