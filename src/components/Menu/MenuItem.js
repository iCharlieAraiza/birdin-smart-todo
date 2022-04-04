import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const MenuItem2 = ({active, setActive, title, icon, slug = "/"}) => {
    console.log({active})
    return (
    <Wrapper className={active === `${slug}` && 'active'}>
        <MenuItemLink  onClick={() => setActive(slug)} to={slug}>
                <MenuItemIcon>
                    {icon}
                </MenuItemIcon>
                <MenuItemText>{title}</MenuItemText>
            </MenuItemLink>
    </Wrapper>
    )
}

const Wrapper = styled.li`
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


export default MenuItem2;
