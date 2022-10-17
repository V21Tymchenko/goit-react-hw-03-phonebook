import styled from 'styled-components';

export const LabelForm = styled.label`
  display: block;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;
export const InputForm = styled.input`
  font-family: inherit;
  font-size: 14px;
  margin-left: 15px;
  border: 1px solid #bdbdbd;
  color: #212529;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const FormButton = styled.button`
  appearance: none;
  background-color: #ffffff;
  border-radius: 40em;
  border-style: none;
  box-shadow: #adcfff 0 -12px 6px inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: block;
  font-family: -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 0 auto;
  outline: none;
  padding: 8px 16px;
  text-decoration: none;
  transition: all 0.15s;
  touch-action: manipulation;
  :hover {
    background-color: #0c66ff8f;
    box-shadow: #009cf7 0 -6px 8px inset;
    transform: scale(1.125);
  }
  :active {
    transform: scale(1.025);
  }
`;
export const Container = styled.div``;
