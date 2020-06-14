import React, { useState } from "react";

export const ToggleSwitch = (props) => {
  const [val, setVal] = useState(0);
  const handleMethod = () => {
    props.boolean === true ? setVal(1) : setVal(0);
    props.method();
  };
  return (
    <div className="ToggleSwitch-container">
      <input
        type="range"
        min={0}
        max={1}
        value={val}
        onChange={handleMethod}
        readOnly
      />
    </div>
  );
};
