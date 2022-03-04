import React, { useState } from 'react'
import styled from 'styled-components'
import AuthOptions from '../../components/Auth/AuthOptions'
import LoginForm from '../../components/Auth/LoginForm'
import RegisterForm from '../../components/Auth/RegisterForm'
import LoginBackground from '../../assets/png/login-background.png'
import TextHeroImg from '../../assets/png/text-hero.png'
import LogoDarkmode from '../../assets/svg/logo-darkmode.svg'

const Auth = () => {
    const [selectedForm, setSelectedForm] = useState('login')

    const handlerForm = () =>{
        switch(selectedForm){
            case 'register':
                return <RegisterForm setSelectedForm={setSelectedForm} />
            default:
                return <LoginForm setSelectedForm={setSelectedForm} />
        }
    }

    return (
        <LoginWrapper>
        <InfoSection>
          <TitleFrame>
            <img src={LogoDarkmode} alt="logo" />
          </TitleFrame>
          <FooterText/>
        </InfoSection>
  
        <LoginSection>
            {handlerForm()}
        </LoginSection>
  
      </LoginWrapper>
    )
}

const AuthContainer = styled.div`
    background-color:
`

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
    width: 200px;
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
  background-size: 110% 110%;
  opacity: 0.5;
  margin-left: 1.5rem;
`



export default Auth