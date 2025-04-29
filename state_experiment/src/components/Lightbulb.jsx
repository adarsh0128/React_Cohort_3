import React, { useState } from "react";
import BulbState from "./BulbState";
import ToggleBulb from "./ToggleBulb";

function Lightbulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

export default Lightbulb;
