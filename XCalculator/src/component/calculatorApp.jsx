// import React, { useState } from "react";
// import "./calculatorApp.css";

// export default function Calculator() {
//   let [result, setResult] = useState(0);
//   let [inputValue, setInputValue] = useState("");

//   let handleClick = (e) => {
//     let buttonValue = e.target.textContent;
//     setInputValue(inputValue + buttonValue);
//   };

//   return (
//     <div className="container">
//       <h1>React Calculator</h1>
//       <div className="content">
//         <input
//           type="text"
//           name="inp"
//           id="inp"
//           pattern="[0-9+*/.-]+"
//           value={inputValue}
//         />
//       </div>
//       <div className="display">
//         <h2>{result}</h2>
//       </div>

//       <div className="buttons">
//         <button className="btn" onClick={handleClick}>
//           8
//         </button>
//         <button className="btn" onClick={handleClick}>
//           7
//         </button>
//         <button className="btn" onClick={handleClick}>
//           9
//         </button>
//         <button className="btn" onClick={handleClick}>
//           +
//         </button>
//         <button className="btn" onClick={handleClick}>
//           4
//         </button>
//         <button className="btn" onClick={handleClick}>
//           5
//         </button>
//         <button className="btn" onClick={handleClick}>
//           6
//         </button>
//         <button className="btn" onClick={handleClick}>
//           -
//         </button>
//         <button className="btn" onClick={handleClick}>
//           1
//         </button>
//         <button className="btn" onClick={handleClick}>
//           2
//         </button>
//         <button className="btn" onClick={handleClick}>
//           3
//         </button>
//         <button className="btn" onClick={handleClick}>
//           *
//         </button>
//         <button className="btn" onClick={handleClick}>
//           C
//         </button>
//         <button className="btn" onClick={handleClick}>
//           0
//         </button>
//         <button className="btn" onClick={handleClick}>
//           =
//         </button>
//         <button className="btn" onClick={handleClick}>
//           /
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "./calculatorApp.css";

export default function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  function isValidExpression(expression) {
  // If nothing is typed, it's not valid
  if (expression === "") {
    return false;
  }

  // If the last character is an operator, it's incomplete (like "2+")
  const lastChar = expression[expression.length - 1];
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastChar)) {
    return false;
  }

  // Otherwise, it's a valid expression
  return true;
}


  const handleClick = (e) => {
    const buttonValue = e.target.textContent;

    if (buttonValue === "=") {
      // 🛑 Check before evaluating
      if (!isValidExpression(inputValue)) {
        setResult("Error");
        return;
      }

      try {
        let evalResult = eval(inputValue);

        // Handle divide by zero (Infinity or NaN)
        if (evalResult === Infinity || isNaN(evalResult)) {
          setResult("NaN");
        } else {
          setResult(evalResult);
        }
      } catch {
        setResult("Error");
      }
    } else if (buttonValue === "C") {
      // Reset input and result
      setInputValue("");
      setResult("");
    } else {
      // Add button value to expression
      setInputValue((prev) => prev + buttonValue);
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <div className="content">
        <input type="text" value={inputValue} readOnly />
      </div>

      <div className="display">
        <h2>{result}</h2>
      </div>

      <div className="buttons">
        <button className="btn" onClick={handleClick}>7</button>
        <button className="btn" onClick={handleClick}>8</button>
        <button className="btn" onClick={handleClick}>9</button>
        <button className="btn" onClick={handleClick}>+</button>

        <button className="btn" onClick={handleClick}>4</button>
        <button className="btn" onClick={handleClick}>5</button>
        <button className="btn" onClick={handleClick}>6</button>
        <button className="btn" onClick={handleClick}>-</button>

        <button className="btn" onClick={handleClick}>1</button>
        <button className="btn" onClick={handleClick}>2</button>
        <button className="btn" onClick={handleClick}>3</button>
        <button className="btn" onClick={handleClick}>*</button>

        <button className="btn" onClick={handleClick}>C</button>
        <button className="btn" onClick={handleClick}>0</button>
        <button className="btn" onClick={handleClick}>=</button>
        <button className="btn" onClick={handleClick}>/</button>
      </div>
    </div>
  );
}
