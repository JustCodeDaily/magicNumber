import React from "react";
import { Button, KeypadWrapper, ControlSection } from "./Controls.styles";

export default function Controls() {
  const keypads = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "✓", "0", "X"];

  return (
    <ControlSection>
      <KeypadWrapper>
        {keypads.map((keypad, index) => (
          <Button key={index} className="keypad-button">
            {keypad}
          </Button>
        ))}
      </KeypadWrapper>
    </ControlSection>
  );
}
