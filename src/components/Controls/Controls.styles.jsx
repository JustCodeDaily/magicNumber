import styled from "styled-components";

export const Button = styled.button`
  display: grid;
  place-content: center;
  padding: 20px 40px;
  background-color: #007bff;
  color: #fff;
  font-size: 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ControlSection = styled.div`
  width: 50vw;
  display: grid;
  place-content: center;
`;

export const KeypadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
`;
