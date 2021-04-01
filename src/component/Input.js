import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="input">
        <input type="text" value={props.setInput} readOnly />
      </div>
    </>
  );
};

export default Input;
