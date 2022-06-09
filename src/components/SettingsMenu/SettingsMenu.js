import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineUser} from 'react-icons/ai'
import { BsGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SettingsMenu = () => {

    const globalPath = window.location.pathname

    const getClassName = (path) => {
        if(path === globalPath) {
            return 'active'
        }
        return ''
    }

    return (
        <MenuWrapper>
            <Link to="/profile">    
                <Item className={getClassName('/profile')}>
                    <AiOutlineUser />
                    My Account
                </Item>
            </Link>
            <Link to="/settings">
                <Item className={getClassName("/settings")}>
                    <BsGearFill />
                    Settings
                </Item>
            </Link>
        </MenuWrapper>
    )
}

const MenuWrapper = styled.ul`
    list-style: none;
    padding-left: 0px;
    margin-right: 1rem;
    margin-top: 10px;
    width: 200px;

`

const Item = styled.li`
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    margin-bottom: 8px;
    font-weight: 500;
    display: flex;
    align-items: center;
    svg {
        margin-right: 6px;
    }
    &.active {
        background-color: var(--selected-menu-color);
    }
`
export default SettingsMenu