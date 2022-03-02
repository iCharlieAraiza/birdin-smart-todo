import React, { useState } from 'react'
import styled from 'styled-components'
import AuthOptions from '../../components/Auth/AuthOptions'
import LoginForm from '../../components/Auth/LoginForm'
import RegisterForm from '../../components/Auth/RegisterForm'


const Auth = () => {
  return (
    <AuthContainer>
        <AuthOptions />
        <LoginForm />
        <RegisterForm />
    </AuthContainer>
  )
}

const AuthContainer = styled.div`

`



export default Auth