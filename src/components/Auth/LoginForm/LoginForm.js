import React, {useState} from 'react'
import { LoginContainer, FormInput, ButtonSection, SubmitButton } from '../Components'
import { validateEmail } from '../../../utils/Validations'


const LoginForm = ( {setSelectedForm} ) => {
  
  const data = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(data);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (el) => {
    console.log(validateEmail(formData.email))
    console.log(formData)
    el.preventDefault()
  }

  return (
    <LoginContainer>
      <h1>Welcome!</h1>
      <p>Login to your account</p>
      <form onChange={onChange} onSubmit={onSubmit}>
        <FormInput placeholder='EMAIL' name="email" />
        <FormInput placeholder='PASSWORD' name="password" type='password' />
        <ButtonSection>
            <SubmitButton type="submit" >Login</SubmitButton>
        </ButtonSection>
      </form>
      <p>Don’t have an account? <a href="#" onClick={ () => setSelectedForm('register') }>Create your account here</a></p>
    </LoginContainer>
  )
}

export default LoginForm