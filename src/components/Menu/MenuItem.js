import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuItem2 = ({active, setActive, title, icon, slug = "/", type="", category = "", pendingCount={}}) => {
    const getPath = () => {
        if(category === "priority"){
            return `/priority/${slug}`
        }
        return `/${slug}`
    }

    const to = getPath();


    const count = pendingCount[slug];

    return (        
    <Wrapper className={ `${active === `${slug}` && 'active'} ${type}` }>
        <MenuItemLink  onClick={() => setActive(slug)} to={to}>
                <MenuItemIcon className="menu-icon" >
                    {icon}
                </MenuItemIcon>
                <MenuItemText>{title}</MenuItemText>
                { count > 0 && (<CountLabel> { count } </CountLabel>) }
            </MenuItemLink>
    </Wrapper>
    )
}

const Wrapper = styled.li`
    cursor: pointer;
    &.active {
        background-color: var(--active-menu-bg-color)!important;
        svg {
            filter: invert(38%) sepia(98%) saturate(2936%) hue-rotate(170deg) brightness(95%) contrast(101%);
        } 
    }
    &:hover {
        background-color: var(--hover-color-bw);
    }
    &.list{
        margin-left: 1rem;
        svg {
            width: 80%;
        }
        .menu-icon {
            padding-right: 0.5rem;
        }
    }
`

const MenuItemLink = styled(Link)`
    padding: 0.5rem 0.5rem;
    display: flex; 
    align-items: center;
`

const MenuItemIcon = styled.div`
    width: 1.5rem;
    padding-right: 0.6rem;
    height: 1.5rem;
    /*
    &.list{
        margin-left: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        padding-right: 0.4rem;
        svg{
            width: 80%;
        }
    }*/
    svg {
        width: 1.5rem;
        height: 1.5rem;
        opacity: 0.6;
    }
`

const MenuItemText = styled.div`
    text-transform: capitalize;
`

const CountLabel = styled.div`
    font-size: 12px;
    background-color: #3c5964;
    color: white;
    margin-left: auto;
    padding: 2px 4px;
    margin-right: -6px;
`


export default MenuItem2;
