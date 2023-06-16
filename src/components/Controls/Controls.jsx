import React, { useState } from "react";
import {
  Button,
  KeypadWrapper,
  ControlSection,
  InputNumber,
} from "./Controls.styles";

export default function Controls({ onCheck, attempts }) {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (keypad) => {
    if (keypad === "X") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (keypad === "✓") {
      if (inputValue.length === 2) {
        if (attempts >= 5) {
          // If the maximum number of attempts has been reached, do not allow further checks
          return;
        }
        onCheck(inputValue);
      }
    } else {
      if (inputValue.length < 2) {
        setInputValue((prevValue) => prevValue + keypad);
      }
    }
  };

  const keypads = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X", "0", "✓"];

  return (
    <ControlSection>
      <InputNumber>{inputValue}</InputNumber>
      <KeypadWrapper>
        {keypads.map((keypad, index) => {
          let buttonClassName = "keypad-button";

          if (keypad === "X") {
            buttonClassName += " red-button";
          } else if (keypad === "✓") {
            buttonClassName += " green-button";
          }

          return (
            <Button
              key={index}
              className={buttonClassName}
              onClick={() => handleButtonClick(keypad)}
            >
              {keypad}
            </Button>
          );
        })}
      </KeypadWrapper>
      <div>Attempts: {attempts}</div>
    </ControlSection>
  );
}
