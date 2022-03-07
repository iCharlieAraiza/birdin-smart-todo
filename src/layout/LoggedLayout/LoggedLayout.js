import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from '../../routes/AllRoutes'
import Menu from '../../components/Menu'

const LoggedLayout = ({ user }) => {    

    const resizeWindow = (e) => {
        if (e.detail == 2) {

            if(window.innerWidth >= screen.width) {
                const originalWidth = window.innerWidth
                const left = (screen.width - (originalWidth - 200) ) / 2;
                window.resizeTo(screen.width-200, screen.height - 100, true);
                
                window.moveTo( left , 0);
            }else{
                window.moveTo(0, 0);
                window.resizeTo(screen.width, screen.height, true);
            }
        }
    }

    return (
        <BrowserRouter>
            <TopBar id="topbar" clasName='topbar' onClick={ resizeWindow }/>
            <Layout>
                <Navbar>
                    <Menu />
                </Navbar>
                <MainContainer>
                    <AllRoutes />
                </MainContainer>
            </Layout>
        </BrowserRouter>
    )
}


const TopBar = styled.div`
    position: absolute;
    top: 0;
    width: 100% ;
    height: 15px;
    background-color: transparent;
`

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
    padding-top: 2rem;
    flex-basis: 0;
    flex-grow: 999;
    min-width: 60%;
    background-color: var(--bg);
    padding: 3.5rem 2rem 0 2rem;
    `


export default LoggedLayout;