import React, { useState } from "react";

export const ToggleSwitch = (props) => {
  const { boolean, method, addClass } = props;
  const [val, setVal] = useState(0);
  const handleMethod = () => {
    boolean === true ? setVal(1) : setVal(0);
    method();
  };
  return (
    <div className={addClass}>
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
