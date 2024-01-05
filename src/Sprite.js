import React, { useState } from "react";
import "./sprite.css"; // Import your CSS file

export default function Sprite() {
  const [thisClass, setThisClass] = useState("idle");

  const handleRunClick = () => {
    setThisClass("run");
  };

  const handleJumpClick = () => {
    setThisClass("jump");
  };

  const handleFallClick = () => {
    setThisClass("fall");
  };

  const handleIdleClick = () => {
    setThisClass("idle");
  };

  const handleAttack1Click = () => {
    setThisClass("attack1");
  };

  const handleAttack2Click = () => {
    setThisClass("attack2");
  };

  const handleHitClick = () => {
    setThisClass("hit");
  };

  const handleDeathClick = () => {
    setThisClass("death");
  };
  console.log(thisClass);

  return (
    <div className="wrapper">
      <div className={thisClass}></div>

      <div className="buttons">
        <button onClick={handleIdleClick}>Idle</button>
        <button onClick={handleJumpClick}>Jump</button>
        <button onClick={handleFallClick}>Fall</button>
        <button onClick={handleHitClick}>Hit</button>

        <button onClick={handleRunClick}>Run</button>
        <button onClick={handleAttack1Click}>Attack1</button>
        <button onClick={handleAttack2Click}>Attack2</button>
        <button onClick={handleDeathClick}>Death</button>
      </div>
    </div>
  );
}
