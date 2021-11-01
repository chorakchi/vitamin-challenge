import styled from "styled-components";

export const TextFieldStyled = styled.input<{ error: boolean }>`
  background-color: white;
  border-radius: 8px;
  margin: 16px 0;
  padding: 20px;
  font-size: 18px;
  position: relative;
  width: 208px;
  height: 40px;
  /* border-color: ${({error}) => error ? 'red' : 'var(--primary-color)'}; */
`;
