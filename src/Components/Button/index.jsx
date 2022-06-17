import React from "react";
import "./style.css";

export default function BaseButton({ name, handleClick, type }) {
  return (
    <div>
      <button className="buttonBase" onClick={handleClick} type={type}>
        {name}
      </button>
    </div>
  );
}
