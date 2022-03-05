import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from '../../routes/AllRoutes'
import Menu from '../../components/Menu'

const LoggedLayout = ({ user }) => {
  return (
    <BrowserRouter>
         <Layout>
            <Navbar>
                <Menu user={user} />
            </Navbar>
            <MainContainer>
                <AllRoutes />
            </MainContainer>
        </Layout>
    </BrowserRouter>
  )
}

const Layout = styled.div`
    background-color: var(--navbar-bg-color);
    box-sizing: border-box;
    display: flex;
    height: 100vh;
`

const Navbar = styled.div`
    flex-basis: 18rem;
    flex-grow: 1;
`


const MainContainer = styled.div`
    padding-top: 3rem;
    flex-basis: 0;
    flex-grow: 999;
    min-width: 60%;
    background-color: var(--bg);
    `


export default LoggedLayout;