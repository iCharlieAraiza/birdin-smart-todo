import styled from "styled-components";

export const LoginContainer = styled.div`
  margin-top: 6rem;
  padding: 1.5rem 4rem;
  width: 100%;
  h1 {
    margin: 0;
    font-weight: 200;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--contrast-color);
  background-color: transparent;
  padding: 10px 0;
  margin-bottom: 0.6rem;
  &:focus {
    outline: none;
  }

  &:after {
    content: "Is no Valid";
  }
`;

export const LabelCheckbox = styled.p`
  margin: 0;
  text-align: right;
`;
export const SubmitButton = styled.button`
  border: none;
  border-radius: 30px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem 2rem;
  background-color: var(--button-color);
  margin: 0.5rem 0;
  width: 100%;
  max-width: 180px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background: white;
    color: grey;
  }
  &[disabled] {
    opacity: 0.8;
    cursor: inherit;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: end;
`;

export const ErrorLabel = styled.label`
  color: #d95656;
  display: block;
`;

export const TaskSectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  svg {
    margin-left: 0.5rem;
    opacity: 0.5;
  }
`;
export const GoogleButton = styled.button`
  background-color: #eeeeee;
  color: #5f5f5f;
  font-weight: 500;
  padding: 8px 2rem;
  width: 100%;
  max-width: 180px;
  border-radius: 3px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-in-out;
  &:hover {
    background-color: #3678b6;
    color: white;
  }
  svg {
    margin-right: 0.5rem;
  }
`;
