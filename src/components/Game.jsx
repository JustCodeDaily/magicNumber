import React, { useState, useEffect } from "react";
import * as Styled from "./Game.styles";
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
  const [restrat, setRestart] = useState(false);

  const keypadButtons = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "X", value: "X" },
    { label: "0", value: "0" },
    { label: "✓", value: "✓" },
  ];

  function handleRestart() {
    setGuess("");
    setGameState(0);
    setRemainingGuesses(5);
    setRestart(false);
    generateRandomNumber();
  }

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
      setRestart(true);
    } else {
      if (remainingGuesses > 1) {
        setRemainingGuesses((prevGuesses) => prevGuesses - 1);
        setGuess(""); // Clear the guess for the next attempt
        setGameState(3); // "Give one more shot" state
      } else {
        setGameState(2); // Game over state
        setRestart(true);
      }
    }
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    setRand(randomNumber);
    // alert(randomNumber);
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
        {restrat && (
          <Styled.RestartGame onClick={handleRestart}>
            Restart Game
          </Styled.RestartGame>
        )}
      </Styled.GameWrapper>

      <Styled.ControlWrapper>
        <Styled.GuessedNumber>Your Guess is: {guess} </Styled.GuessedNumber>
        <Styled.KeypadWrapper>
          {keypadButtons.map((button) => {
            if (button.label === "✓") {
              return (
                <Styled.CheckmarkButton
                  key={button.label}
                  onClick={() => handleSubmit(button.value)}
                  disabled={
                    gameState === 1 || gameState === 2 || guess.length < 2
                  }
                >
                  {button.label}
                </Styled.CheckmarkButton>
              );
            } else if (button.label === "X") {
              return (
                <Styled.CancelButton
                  key={button.label}
                  onClick={() => handleCancel(button.value)}
                  disabled={
                    gameState === 1 || gameState === 2 || guess.length === 0
                  }
                >
                  {button.label}
                </Styled.CancelButton>
              );
            } else {
              return (
                <Styled.KeypadButton
                  key={button.label}
                  onClick={() => handleNumber(button.value)}
                >
                  {button.label}
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
