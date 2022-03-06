import React, { useState } from 'react'
import styled from 'styled-components'
import { BiTask } from 'react-icons/bi'
import { BsFileBarGraph } from 'react-icons/bs'
import { Link, withRouter } from 'react-router-dom'

const Menu = (props) => {
    const [active, setActive] = useState(window.location.pathname)
    
    const user = null

    const handlerMenu = (e) => {
        console.log(e.view.location.pathname)
        setActive(e.view.location.pathname)
    }

    return (
        <MenuContainer>
            <UserCard>
                <ProfileAvatar />
                <UserName>{user?.name != null? user.name : 'new user' }</UserName>
            </UserCard>
            <MenuList>
                <MenuItem className={active === '/' && 'active'}>
                    <MenuItemLink to="/"onClick={() => setActive('/')}>
                        <MenuItemIcon>
                            <BiTask />
                        </MenuItemIcon>
                        <MenuItemText>Taks</MenuItemText>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem className={active === '/statistics' && 'active'}>
                    <MenuItemLink  onClick={() => setActive('/statistics')} to="/statistics">
                        <MenuItemIcon>
                            <BsFileBarGraph />
                        </MenuItemIcon>
                        <MenuItemText>Reports</MenuItemText>
                    </MenuItemLink>
                </MenuItem>
            </MenuList>

        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    padding: 4rem 1.5rem 2rem 1.5rem;
`

const UserCard = styled.div`
    display: flex;
    align-items: center;
å    flex-wrap: wrap;
`

const ProfileAvatar = styled.div`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
    background-color: gray;
`

const UserName = styled.div`
    text-transform: capitalize;
`

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
`

const MenuItem = styled.li`
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    &.active {
        background-color: var(--active-menu-bg-color);
        svg {
            filter: invert(38%) sepia(98%) saturate(2936%) hue-rotate(170deg) brightness(95%) contrast(101%);
        } 
    }
`

const MenuItemLink = styled(Link)`
    display: flex; 
    align-items: center;
`

const MenuItemIcon = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    svg{
        width: 1.5rem;
        height: 1.5rem;
        opacity: 0.6;
    }
    `

const MenuItemText = styled.div`
    margin-left: 1rem;
    text-transform: capitalize;
`

export default Menu