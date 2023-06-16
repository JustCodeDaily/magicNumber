import React from "react";
import { Container } from "./Wrapper.styles";
import Controls from "../Controls/Controls";
import Game from "../Game/Game";

export default function Wrapper() {
  return (
    <Container>
      <Game />
    </Container>
  );
}
