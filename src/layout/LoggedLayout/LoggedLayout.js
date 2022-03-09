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
    width: 100%;
    height: 45px;
    background-color: transparent;
    -webkit-app-region: drag;
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
    flex-basis: 0;
    flex-grow: 999;
    min-width: 60%;
    background-color: var(--bg);
    padding-left: 2rem;
    //overflow: scroll;
    `

const SideBarContainer = styled.div`
    flex-basis: 18;
    flex-grow: 1;
    min-width: 40%;
    padding-left: 2rem;
    overflow: scroll;
`


export default LoggedLayout;