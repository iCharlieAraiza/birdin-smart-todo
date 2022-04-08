import React, { useState } from 'react'
import styled from 'styled-components'
import { BiLayer, BiCalendarCheck } from 'react-icons/bi'
import { BsFileBarGraph } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import LabelData from '../../utils/label-data.json'
import MenuItem2 from './MenuItem'

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
                <MenuItem2 active={active} setActive={setActive} slug="" icon={<BiCalendarCheck/>} title="Calendar"/>
                <MenuItem2 active={active} setActive={setActive} slug="pending" icon={<BiLayer/>} title="Pending"/>
                <MenuItem2 active={active} setActive={setActive} slug="statistics" icon={<BsFileBarGraph/>} title="Reports"/>
            </MenuList>
            <Separator />
            <LabelContainer>
                <Wrapper>
                    { LabelData.filter(el=>el.label !== 'none' ).map((el, index)=>(
                        <LabelItem key={index} color={el.color}  onClick={() => setActive(`/label/${el.label}`)} to={`/label/${el.label}`} />
                    ))}
                </Wrapper>
            </LabelContainer>
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

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e6e6e638;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    //justify-content: space-around;
    `

const Wrapper = styled.div`
    display: flex;
    margin: auto;
`

const LabelItem = styled(Link)`
    width: 1.4rem;
    height: 1.4rem;
    background-color: ${props=>props.color};
    border-radius: 50%;
    cursor: pointer; ;
    margin-right: 8px;
    `

export default Menu