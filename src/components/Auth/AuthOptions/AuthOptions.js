import React from 'react'
import LoginBackground from '../../../assets/png/login-background.png' 
import styled from 'styled-components'
import LogoDarkmode from '../../../assets/svg/logo-darkmode.svg'
import TextHeroImg from '../../../assets/png/text-hero.png' 

const AuthOptions = () => {
  return (
    <LoginWrapper>
      <InfoSection>
        <TitleFrame>
          <img src={LogoDarkmode} alt="logo" />
        </TitleFrame>
        <FooterText/>
      </InfoSection>

      <LoginSection>
        <LoginForm>
          <h1>Welcome!</h1>
          <p>Login to your account</p>
          <form>
            <FormInput placeholder='EMAIL' />
            <FormInput placeholder='PASSWORD' type='password' />
            <SubmitButton>Login</SubmitButton>
          </form>
          <p>Don’t have an account? <a href="#">Create your account here</a></p>
        </LoginForm>
      </LoginSection>

    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  //background-image: url(${LoginBackground});
  background-color: var(--bg);
  display: flex;
`

const InfoSection = styled.div`
  background: url(${LoginBackground});
  height: 100vh;
  width: auto;
  overflow: hidden;
  width: 50%;
  position: relative;
`

const LoginSection = styled.div`
  display: flex;
  width: 50%;
`

const TitleFrame = styled.div`
  background-color: rgb(33 45 63 / 75%);
  padding: 1.5rem 1rem;
  margin-top: 6rem;
  img{
    width: 250px;
    margin-left: 2rem;
  }
`
const FooterText = styled.div`
  background-image: url(${TextHeroImg});;
  background-repeat: no-repeat;
  height: 5rem;
  position: absolute;
  bottom: 1rem;
  width: 22rem;
  background-size: 115% 115%;
  opacity: 0.5;
  margin-left: 1.5rem;
`
const LoginForm = styled.div`
  margin-top: 6rem;
  padding: 1.5rem 4rem;
  width: 100%;
  h1{
    margin: 0;
    font-weight: 200;
  }
`

const FormInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--contrast-color);
  background-color: transparent;
  padding: 10px 0;
  margin-bottom: 0.6rem;
  &:focus{
    outline: none;
  }
`

const SubmitButton = styled.button`
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
`


export default AuthOptions