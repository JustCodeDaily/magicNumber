import React, { useState, useEffect } from "react";
import * as Styled from "./Game.styles";
const keypadOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, "cancel", 0, "checkmark"];
const keypads = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  cancel: "X",
  0: "0",
  checkmark: "✓",
};

const gameVerbiage = [
  "You have a Magic Number, Guess Me!",
  "Bulls Eye, You have done it!",
  "Ooops, Game Over. Better luck next time",
  "Maybe, Give another try",
];

function Game() {
  const [guess, setGuess] = useState("");
  const [rand, setRand] = useState(null);
  const [gameState, setGameState] = useState(0);
  const [remainingGuesses, setRemainingGuesses] = useState(5);

  function handleNumber(key) {
    if (guess.length >= 2) {
      return;
    }
    const newNumber = guess + key;
    setGuess(newNumber);
  }

  function handleCancel() {
    const newNumber = guess.slice(0, -1);
    setGuess(newNumber);
  }

  function handleSubmit() {
    if (guess.length < 2) {
      return;
    }
    if (parseInt(guess) === rand) {
      setGameState(1);
    } else {
      if (remainingGuesses > 1) {
        setRemainingGuesses((prevGuesses) => prevGuesses - 1);
        setGuess(""); // Clear the guess for the next attempt
        setGameState(3); // "Give one more shot" state
      } else {
        setGameState(2); // Game over state
      }
    }
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    setRand(randomNumber);
  }

  return (
    <Styled.Container>
      <Styled.GameWrapper>
        <Styled.GreetingMessage>
          {gameState === 0 && gameVerbiage[0]}
          {gameState === 1 && gameVerbiage[1]}
          {gameState === 2 && gameVerbiage[2]}
          {gameState === 3 && gameVerbiage[3]}
        </Styled.GreetingMessage>
        <Styled.GameWrapper>
          {rand ? `${rand}` : "Generating random number..."}
        </Styled.GameWrapper>
      </Styled.GameWrapper>

      <Styled.ControlWrapper>
        <Styled.GuessedNumber>Your Guess is: {guess} </Styled.GuessedNumber>
        <Styled.KeypadWrapper>
          {keypadOrder.map((key) => {
            if (key === "cancel") {
              return (
                <Styled.CancelButton
                  key={key}
                  onClick={() => handleCancel(key)}
                  disabled={
                    gameState === 1 || gameState === 2 || guess.length == 0
                  }
                >
                  {keypads[key]}
                </Styled.CancelButton>
              );
            } else if (key === "checkmark") {
              return (
                <Styled.CheckmarkButton
                  key={key}
                  onClick={() => handleSubmit(key)}
                  disabled={
                    gameState === 1 || gameState === 2 || guess.length < 2
                  }
                >
                  {keypads[key]}
                </Styled.CheckmarkButton>
              );
            } else {
              return (
                <Styled.KeypadButton
                  key={key}
                  onClick={() => handleNumber(key)}
                >
                  {keypads[key]}
                </Styled.KeypadButton>
              );
            }
          })}
        </Styled.KeypadWrapper>
      </Styled.ControlWrapper>
    </Styled.Container>
  );
}

export default Game;
