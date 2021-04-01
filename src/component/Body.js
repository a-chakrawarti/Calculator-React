import React, { useEffect, useState } from "react";
import isNaN from "../utils/isNaN";
import Result from "./Result";
import Input from "./Input";
import NumPad from "./NumPad";

const Body = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [evaluate, setEvaluate] = useState("");
  const [visibility, setVisibility] = useState(false);

  const handleNumber = (value) => {
    setInput((prevState) => prevState + value);
    setEvaluate((prevState) => prevState + value);
  };

  const handleOperator = (value) => {
    switch (value) {
      case "+":
        setInput((prevState) => prevState + value);
        setEvaluate((prevState) => prevState + value);
        // console.log("Input", input);
        // console.log("Evaluate", evaluate);
        break;

      // just show
      case "=":
        // console.log(typeof result);
        if (visibility) {
          setInput(String(result));
          setEvaluate(String(result));
          setResult("");
          //   console.log("Result on =", result);
          //   console.log("Visibility on =", visibility);
        }
        // console.log("On equals, evaluate is", evaluate);
        break;
      case "AC":
        setResult("");
        setInput("");
        setEvaluate("");
        break;
      case "×":
        setInput((prevState) => prevState + value);
        setEvaluate((prevState) => prevState + "*");
        break;
      case "&lt;":
        // console.log("Backspace");
        let newValue = input.slice(0, -1);
        setInput(newValue);
        newValue = evaluate.slice(0, -1);
        setEvaluate(newValue);
        break;
      case "÷":
        setInput((prevState) => prevState + value);
        setEvaluate((prevState) => prevState + "/");
        break;
      default:
        console.log("No cases matches!");
    }
  };

  const handleInputChange = (value) => {
    if (!isNaN(value)) {
      handleNumber(value);
    } else {
      handleOperator(value);
    }
  };

  const calc = (value) => {
    console.log(value);
    let lastChar = value.charAt(value.length - 1);
    if (!isNaN(lastChar)) {
      return eval(value);
    } else {
      let newEval = value.slice(0, -1);
      return eval(newEval);
    }
  };

  useEffect(() => {
    // console.log("new eva", evaluate);
    let newEval = evaluate.slice(0, -1);
    // console.log(isNaN(newEval));
    if (isNaN(newEval)) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [evaluate]);

  useEffect(() => {
    // console.log("useEffect in action!");
    // console.log("Evaluate", evaluate);
    if (evaluate !== "") {
      //   console.log("Inside visibilty");
      //   console.log(evaluate);
      let newValue = calc(evaluate);
      //   console.log("Evaluated Value", newValue);
      setResult(newValue);
      //   console.log("Result", result);
    }
  }, [evaluate, visibility]);
  return (
    <div className="grid-container">
      <Input setInput={input} />
      <Result value={visibility ? result : null} />
      <NumPad changeInput={handleInputChange} />
    </div>
  );
};

export default Body;
