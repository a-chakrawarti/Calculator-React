import React from "react";
import isNaN from "../utils/isNaN";

const NumPad = (props) => {
  const symbolList = [
    "AC",
    "π",
    "e",
    "^",
    "<",
    "7",
    "8",
    "9",
    "%",
    "÷",
    "4",
    "5",
    "6",
    "√",
    "×",
    "1",
    "2",
    "3",
    "+/-",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  const addclass = (item) => {
    if (
      item === "AC" ||
      item === "π" ||
      item === "e" ||
      item === "^" ||
      item === "<"
    ) {
      return "button blue-bg";
    } else if (isNaN(item) && item === ".") {
      return "button span-two border-right";
    } else if (isNaN(item)) {
      return "button operator";
    } else if (item === "6" || item === "3" || item === "9") {
      return "button border-right";
    } else {
      return "button";
    }
  };

  const handleOnClick = (e) => {
    // console.log(e.target.innerHTML);
    props.changeInput(e.target.innerHTML);
  };
  return (
    <>
      {symbolList.map((item, index) => {
        // console.log(item, isNaN(item));
        return (
          <div
            key={index}
            className={addclass(item)}
            onClick={(e) => handleOnClick(e)}
          >
            {item}
          </div>
        );
      })}
    </>
  );
};

export default NumPad;
