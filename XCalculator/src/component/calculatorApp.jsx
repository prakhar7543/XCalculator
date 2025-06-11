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
  const [inputValue, setInputValue] = useState("");  // stores the full expression
  const [result, setResult] = useState("");          // stores the result

  const handleClick = (e) => {
    const buttonValue = e.target.textContent;

    if (buttonValue === "=") {
      try {
        // Evaluate expression with eval
        let evalResult = eval(inputValue);

        // Handle divide by 0
        if (evalResult === Infinity) {
          setResult("Infinity");
        } else if (isNaN(evalResult)) {
          setResult("NaN");
        } else {
          setResult(evalResult);
        }
      } catch (err) {
        setResult("Error");
      }
    } else if (buttonValue === "C") {
      // Clear everything
      setInputValue("");
      setResult("");
    } else {
      // Append clicked button to input
      setInputValue((prev) => prev + buttonValue);
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <div className="content">
        <input
          type="text"
          name="inp"
          id="inp"
          value={inputValue}
          readOnly
        />
      </div>

      <div className="display">
        <h2>{result}</h2>
      </div>

      <div className="buttons">
        {/* Buttons in the correct order */}
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
