import styled from "styled-components";

export const LoginContainer = styled.div`
  margin-top: 6rem;
  padding: 1.5rem 4rem;
  width: 100%;
  h1{
    margin: 0;
    font-weight: 200;
  }
`

export const FormInput = styled.input`
width: 100%;
border: none;
border-bottom: 1px solid var(--contrast-color);
background-color: transparent;
padding: 10px 0;
margin-bottom: 0.6rem;
&:focus{
  outline: none;
}

&:after{
    content: "Is no Valid";
}

`

export const LabelCheckbox = styled.p`
    margin: 0;
    text-align: right;
`
export const SubmitButton = styled.button`
  border: none;
  border-radius: 30px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem 2rem;
  background-color: var(--button-color);
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
  &[disabled]{
    opacity: 0.8;
    cursor: inherit;
  }

`

export const ButtonSection = styled.div`
    display: flex;
    justify-content: end;
    `

export const ErrorLabel = styled.label`
    color: #d95656;
    display: block;
`
