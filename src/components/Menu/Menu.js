import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LabelData from '../../utils/label-data.json'
import MenuItem2 from './MenuItem'
import { FiArrowDown, FiCircle, FiArrowUp, FiAlertOctagon } from 'react-icons/fi'
import { BiLayer, BiCalendarCheck } from 'react-icons/bi'
import { BsFileBarGraph } from 'react-icons/bs'
import {RiUserFill} from 'react-icons/ri'
import {MdLabelImportant} from 'react-icons/md'

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
                <ProfileAvatar>
                    <RiUserFill/>
                </ProfileAvatar>    
                <UserName>{user?.name != null? user.name : 'new user' }</UserName>
            </UserCard>
            <MenuList>
                <MenuItem2 active={active} setActive={setActive} slug="" icon={<BiCalendarCheck/>} title="Calendar"/>
                <MenuItem2 active={active} setActive={setActive} slug="pending" icon={<BiLayer/>} title="Pending"/>
                <MenuItem2 active={active} setActive={setActive} slug="important" icon={<MdLabelImportant/>} title="Important"/>
                <MenuItem2 active={active} setActive={setActive} slug="statistics" icon={<BsFileBarGraph/>} title="Reports"/>
                <NoLinkMenuItem>Priority</NoLinkMenuItem>
                <MenuItem2 active={active} setActive={setActive} category={'priority'} slug="medium" icon={<FiCircle/>} title="Medium" type="list"/>
                <MenuItem2 active={active} setActive={setActive} category={'priority'} slug="high" icon={<FiArrowUp />} title="High" type="list"/>
                <MenuItem2 active={active} setActive={setActive} category={'priority'} slug="urgent" icon={<FiAlertOctagon/>} title="Urgent" type="list"/>

            </MenuList>
            <Separator />
            <LabelContainer>
                <Wrapper>
                    { LabelData.filter(el=>el.label !== 'none' ).map((el, index)=>(
                        <LabelItem key={index} color={el.color} slug={`label-${el.color}`}  onClick={() => setActive(`/label/${el.label}`)} to={`/label/${el.label}`} />
                    ))}
                </Wrapper>
            </LabelContainer>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    padding: 3.2rem 1.5rem 2rem 1.5rem;
    user-select: none
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
    background-color: #507fbb;
    display: flex;
    align-items: end;
    justify-content: center;
    overflow: hidden;
    svg{
        width: 80%;
        height: 80%;
        margin-bottom: -2px;
    }
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
        background-color: var(--active-menu-bg-color)!important;
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
const NoLinkMenuItem = styled.div`
    padding: 0.8rem 0.5rem;
    display: flex; 
    align-items: center;
    font-weight: 600;
    color: #ededed;
    font-size: 14px;
`
    

export default Menu