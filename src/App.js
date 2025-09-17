import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input); // simple eval for demo
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={btn === "=" ? handleCalculate : () => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button onClick={handleClear} className="clear">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
