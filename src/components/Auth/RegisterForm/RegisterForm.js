import React from 'react'
import { LoginContainer, FormInput, LabelCheckbox, ButtonSection, SubmitButton } from '../Components'


const RegisterForm = ( { setSelectedForm} ) => {
  return (
    <LoginContainer>
      <h1>Welcome!</h1>
      <p>Let's create a new account. It's free!</p>
      <form onSubmit={ (el) => console.log(el)}>
        <FormInput placeholder='EMAIL' name="email" />
        <FormInput placeholder='PASSWORD' type='password' name="password"/>
        <FormInput placeholder='REPEAT PASSWORD' type='password' name="rep-password" />
        <LabelCheckbox><input type="checkbox" id="cbox1" value="first_checkbox" /> I acept terms and conditions.</LabelCheckbox>
        <ButtonSection>
            <SubmitButton>Sign up</SubmitButton>
        </ButtonSection>
      </form> 
      <p>Do you already have an account? <a href="#" onClick={ () => setSelectedForm('login') }>Sign In!</a></p>
    </LoginContainer>
  )
}

export default RegisterForm