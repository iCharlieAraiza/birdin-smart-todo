import React from 'react'
import styled from 'styled-components'

const LoggedLayout = ({ user }) => {
  return (
    <Layout>
        <Navbar>
            <h1>Hello {user.displayName}</h1>
        </Navbar>
        <Main>
            <h2>Hello</h2>
        </Main>
    </Layout>
  )
}

const Layout = styled.div`
    background-color: var(--bg);
    box-sizing: border-box;
    display: flex;
    height: 100vh;
`

const Navbar = styled.div`
    flex-basis: 20rem;
    flex-grow: 1;
`


const Main = styled.div`
    flex-basis: 0;
    flex-grow: 999;
    min-width: 60%;
    background-color: var(--navbar-color);
    `


export default LoggedLayout;