import styled from "styled-components";

export const Container = styled.div`
  min-width: 80vw;
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const GameWrapper = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
`;
export const ControlWrapper = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
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

export const GreetingMessage = styled(GuessedNumber)``;

export const Message = styled.div`
  font-size: 18px;
`;
