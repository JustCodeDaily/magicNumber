import React from "react";
import { Wrapper, GameSection } from "./Game.styles";

function Game() {
  return (
    <GameSection>
      <div className="gameInfo">
        Game Information - Ready / Start / End / Lost
      </div>
      <div className="magicSquare">The Magic Squure</div>
      <div className="helpText">Great or Less</div>
      <div className="toggle">Toggle Button</div>
    </GameSection>
  );
}

export default Game;
