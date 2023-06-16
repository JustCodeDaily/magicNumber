import React, { useState } from "react";
import "./App.css";

const Game = () => {
  const [magicNumber, setMagicNumber] = useState(generateMagicNumber());
  const [userGuess, setUserGuess] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [gameResult, setGameResult] = useState("");
  const [showHelpText, setShowHelpText] = useState(false);

  function generateMagicNumber() {
    return Math.floor(Math.random() * 90 + 10); // Generate a random 2-digit number
  }

  function handleToggle() {
    setShowHelpText(!showHelpText);
  }

  function handleGuess(number) {
    if (userGuess.length < 2) {
      setUserGuess(userGuess + number);
    }
  }

  function handleBackspace() {
    setUserGuess(userGuess.slice(0, -1));
  }

  function handleSubmit() {
    if (userGuess === "") return; // Don't submit an empty guess

    if (parseInt(userGuess) === magicNumber) {
      setGameResult("You Won!");
      return;
    }

    setAttempts(attempts - 1);
    if (attempts === 1) {
      setGameResult("You Lost!");
    }

    setUserGuess("");
  }

  function handleSquareClick() {
    setMagicNumber("");
  }

  function handleReset() {
    setMagicNumber(generateMagicNumber());
    setUserGuess("");
    setAttempts(5);
    setGameResult("");
  }

  return (
    <div>
      <h1>Guess the Number</h1>
      <div>
        <div>Game Section:</div>
        {gameResult && <div>Game Result: {gameResult}</div>}
        <div onClick={handleSquareClick}>
          Magic Square: {magicNumber ? "Hidden" : "Number Revealed"}
        </div>
        {showHelpText && (
          <div>Help Text: {userGuess < magicNumber ? "Bigger" : "Lesser"}</div>
        )}
        <div>
          Toggle Help Text:{" "}
          <input
            type="checkbox"
            checked={showHelpText}
            onChange={handleToggle}
          />
        </div>
      </div>
      <div>
        <div>Control Section:</div>
        <input type="text" value={userGuess} disabled={gameResult !== ""} />
        <div>
          {Array.from(Array(10).keys()).map((number) => (
            <button key={number} onClick={() => handleGuess(number)}>
              {number}
            </button>
          ))}
          <button onClick={handleBackspace}>Backspace</button>
        </div>
        <button onClick={handleSubmit} disabled={gameResult !== ""}>
          Submit
        </button>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Game;
