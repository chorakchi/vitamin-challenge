import styled from "styled-components";

export const SliderStyled = styled.input`
-webkit-appearance: none;
  width: 300px;
  height: 8px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 20px;
  margin: 20px 0;
  :hover {
  opacity: 1;
}

::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
  border-radius: 4px;
}

::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
  border-radius: 4px;

}
`;
