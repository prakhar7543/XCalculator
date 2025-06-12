import React, { useState } from "react";
import "./calculatorApp.css";

export default function DummyCalculator() {
  let [inputValue, setInputValue] = useState("");
  let [result, setResult] = useState("");

  let calculate = () => {
    if (inputValue === "") {
      setResult("Error");
      return;
    }

    let tokens = inputValue.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

    if (!tokens) {
      setResult("Error");
      return;
    }

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "*" || tokens[i] === "/") {
        let first = tokens[i - 1];
        let second = tokens[i + 1];
        let ans;

      if (tokens[i] === "/") {
        if (first === 0 && second === 0) {
          setResult("NaN");
          return;
        } else if (second === 0) {
          setResult("Infinity");
          return;
        } else {
          ans = first / second;
        }
      } else {
        ans = first * second;
      }

        tokens.splice(i - 1, 3, ans.toString());
        i = i - 1;
      }
    }

    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      let operator = tokens[i];
      let nextNumber = tokens[i + 1];

      if (operator === "+") {
        result += nextNumber;
      } else {
        result -= nextNumber;
      }
    }

    setResult(result);
  };

  let handleClick = (e) => {
    let buttonValue = e.target.textContent;

    if (buttonValue === "C") {
      setInputValue("");
      setResult(0);
      return;
    }

    if (buttonValue === "=") {
      try {
        calculate();
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInputValue((prev) => prev + buttonValue);
    }
  };

  return (
    <>
      <div className="container">
        <h1>React Calculator</h1>

        <div className="content">
          <input type="text" value={inputValue} readOnly />
        </div>

        <div className="display">
          <h2>{result}</h2>
        </div>

        <div className="buttons">
          <button className="btn" onClick={handleClick}>
            7
          </button>
          <button className="btn" onClick={handleClick}>
            8
          </button>
          <button className="btn" onClick={handleClick}>
            9
          </button>
          <button className="btn" onClick={handleClick}>
            +
          </button>

          <button className="btn" onClick={handleClick}>
            4
          </button>
          <button className="btn" onClick={handleClick}>
            5
          </button>
          <button className="btn" onClick={handleClick}>
            6
          </button>
          <button className="btn" onClick={handleClick}>
            -
          </button>

          <button className="btn" onClick={handleClick}>
            1
          </button>
          <button className="btn" onClick={handleClick}>
            2
          </button>
          <button className="btn" onClick={handleClick}>
            3
          </button>
          <button className="btn" onClick={handleClick}>
            *
          </button>

          <button className="btn" onClick={handleClick}>
            C
          </button>
          <button className="btn" onClick={handleClick}>
            0
          </button>
          <button className="btn" onClick={handleClick}>
            =
          </button>
          <button className="btn" onClick={handleClick}>
            /
          </button>
        </div>
      </div>
    </>
  );
}
