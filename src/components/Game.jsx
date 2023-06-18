import React, { useState, useEffect } from "react";
import * as Styled from "./Game.styles";
const gameVerbiage = [
  "You have a Magic Number, Guess Me!",
  "Bulls Eye, You have done it!",
  "Ooops, Game Over. Better luck next time",
  "Maybe, Give another try",
  "Seems, You have tried that before",
];

function Game() {
  const [guess, setGuess] = useState("");
  const [rand, setRand] = useState(null);
  const [gameState, setGameState] = useState(0);
  const [remainingGuesses, setRemainingGuesses] = useState(5);
  const [restrat, setRestart] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const [previousGuesses, setPreviousGuesses] = useState([]);

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
    setShakeAnimation(false);
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
        if (previousGuesses.includes(guess)) {
          setGuess("");
          setGameState(4); // Same guess state
        } else {
          setRemainingGuesses((prevGuesses) => prevGuesses - 1);
          setGuess(""); // Clear the guess for the next attempt
          setGameState(3); // "Give one more shot" state
          setShakeAnimation(true);
          setPreviousGuesses((prevGuesses) => [...prevGuesses, guess]);
        }
      } else {
        setGameState(2); // Game over state
        setRestart(true);
      }
    }
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);

  useEffect(() => {
    if (shakeAnimation) {
      const timeout = setTimeout(() => {
        setShakeAnimation(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [shakeAnimation]);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    setRand(randomNumber);
  }

  return (
    <Styled.Container>
      <Styled.GameWrapper>
        <Styled.GreetingMessage shake={shakeAnimation ? "true" : undefined}>
          {gameState === 0 && gameVerbiage[0]}
          {gameState === 1 && gameVerbiage[1]}
          {gameState === 2 && gameVerbiage[2]}
          {gameState === 3 && gameVerbiage[3]}
          {gameState === 4 && gameVerbiage[4]}
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

        <Styled.ChancesWrapper>
          {Array.from({ length: remainingGuesses }, (_, index) => (
            <Styled.Heart key={index}>❤️ </Styled.Heart>
          ))}
        </Styled.ChancesWrapper>
      </Styled.ControlWrapper>
    </Styled.Container>
  );
}

export default Game;
