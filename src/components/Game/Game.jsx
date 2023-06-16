import React, { useState, useEffect } from "react";
import * as Styled from "./Game.styles";
import Controls from "../Controls/Controls";

function Game() {
  const [magicNumber, setMagicNumber] = useState(null);
  const [gameState, setGameState] = useState("start");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    generateMagicNumber();
  }, []);

  const generateMagicNumber = () => {
    const randomNumber = Math.floor(Math.random() * 90) + 10; // Generate random number between 10 and 99
    setMagicNumber(randomNumber);
    setGameState("start");
    setAttempts(0);
    console.log(randomNumber);
  };

  const handleCheck = (inputValue) => {
    setAttempts((prevAttempts) => prevAttempts + 1);

    if (inputValue === magicNumber.toString()) {
      setGameState("won");
    } else if (attempts >= 4) {
      setGameState("lost");
    } else {
      setGameState("tryAgain");
    }
  };

  return (
    <Styled.GameSection>
      <Styled.GameMessage>
        {gameState === "start" &&
          "Please Choose a 2 digit number >= 10 and <= 99"}
        {gameState === "tryAgain" && "Give One More Try"}
        {gameState === "won" && "You Won!"}
        {gameState === "lost" &&
          "Sorry, you have reached the maximum number of attempts. You lost!"}
      </Styled.GameMessage>
      <Styled.MagicSquare gameState={gameState} />
      <Controls onCheck={handleCheck} attempts={attempts} />
    </Styled.GameSection>
  );
}

export default Game;
