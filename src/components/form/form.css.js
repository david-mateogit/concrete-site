import styled from "styled-components";

export const FormGroup = styled.form`
  color: black;
  display: block;
  width: 300px;

  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 15px;
  box-sizing: border-box;
  margin: 1rem auto;
  padding: 30px 38px;

  > h3 {
    text-align: left;
    margin-bottom: 1.5rem;
    width: 100%;
    color: #71525c;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #71525c;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 16px;
  background: rgba(167, 172, 176, 0.2);
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }
  &.error {
    border-color: red;
  }
  &[type="submit"],
  &[type="reset"] {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  &[type="submit"] {
    background: rgba(113, 82, 92, 1);
    color: white;
  }
  &[type="reset"] {
    background: rgba(141, 144, 155, 1);
    color: white;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 16px;
  display: block;
  background: rgba(167, 172, 176, 0.2);
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }
  &.error {
    border-color: red;
  }
`;
