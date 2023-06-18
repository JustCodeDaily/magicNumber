import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  min-width: 80vw;
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const GameWrapper = styled.div`
  flex: 1;
  display: grid;
  place-content: center end;
  margin-right: 5vh;
`;

export const ChancesWrapper = styled.div`
  display: flex;
`;

export const Heart = styled.div`
  font-size: 24px;
`;

export const ControlWrapper = styled.div`
  flex: 1;
  display: grid;
  place-content: center start;
  margin-left: 5vh;
`;

export const KeypadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
`;

export const KeypadButton = styled.button`
  padding: 10px 35px;
  height: 80px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px yellow;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled(KeypadButton)`
  background-color: red;
  border-bottom-left-radius: 16px;
  &:hover {
    background-color: darkred;
  }
`;

export const CheckmarkButton = styled(KeypadButton)`
  background-color: green;
  border-bottom-right-radius: 16px;
  &:hover {
    background-color: darkgreen;
  }
`;

export const GuessedNumber = styled.div`
  display: grid;
  place-items: center;
  font-size: 18px;
  margin-bottom: 12px;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const GreetingMessage = styled(GuessedNumber)`
  height: 400px;
  width: 400px;
  background: teal;
  color: white;

  ${({ shake }) =>
    shake &&
    css`
      animation: ${shakeAnimation} 0.5s ease-in-out;
    `}
`;

export const Message = styled.div`
  font-size: 18px;
`;

export const RestartGame = styled.button`
  margin-top: 18px;
  padding: 10px 35px;
  height: 80px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
