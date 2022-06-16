import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { RiUserFill } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsGearFill } from 'react-icons/bs'
import firebase from '../../utils/firebase'
import { Link } from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'

    const Login = ({setActive}) => {
        const {globalUser, dispatchUserEvent} = useContext(GlobalContext)
        let user = globalUser

        const [open, setOpen] = useState(false)

        const handleClick = () => {
            setOpen(!open)
            setActive('/profile')
        }

        const signOut = () => {
            firebase.auth().signOut()
        }

        const getUserName = () => {
            if(user) {
                return user.displayName.length > 0 ? user.displayName : user.email
            }
            return 'Default User'
        }

        return (
            <>
                <Wrapper>
                    <UserCard onClick={handleClick} className={open && 'open'}>
                        <ProfileAvatar className='profile-avatar'>
                            { !user.photoURL ? <RiUserFill/> : <img src={user.photoURL}/>}
                        </ProfileAvatar>    
                        <UserName>{ getUserName() }</UserName>
                        <SelectorArrow>
                            <MdKeyboardArrowDown/>
                        </SelectorArrow>
                    </UserCard>
                    <MenuList className={open && 'open'}>
                        <Link to="/profile">
                            <Item onClick={handleClick}>    
                                <AiOutlineUser/>My Profile
                            </Item>
                        </Link>
                        <Link to="/settings">
                            <Item onClick={handleClick}><BsGearFill/>Settings</Item>
                        </Link>
                        <Separator/>
                        <Item onClick={signOut}> <BiLogOut/>Log Out</Item>
                    </MenuList> 
                </Wrapper>
                {open && (<Overlay onClick={handleClick}/>)}
            </>
        )
    }

    const Wrapper = styled.div`
        position: relative;
        width: 100%;
        z-index: 2;
        height: 30px;
    `

    const UserCard = styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
        padding: 7px 6px;
        border: 1px solid transparent;
        border-radius: 5px;
        transition: 0.2s ease-in-out;
        &.open {
            border: 1px #e0e0e047 solid;
            background-color: #ffffff17;
            padding: 6px;
            //transition: 0.4s ease-in-out;
            .profile-avatar {
                transition: 0.2s ease-in-out;
                width: 1.5rem;
                height: 1.5rem;
            }
        }
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
        transition: 0.2s ease-in-out;
        svg{
            width: 80%;
            height: 80%;
            margin-bottom: -2px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `

    const UserName = styled.div`
        text-transform: capitalize;
    `

    const SelectorArrow = styled.div`
        margin-left: auto;
        height: 20px;
        svg {
            font-size: 20px;
        }
    `

    const MenuList = styled.div`
        opacity: 0;
        list-style: none;
        padding: 0;
        width: 100%;
        left: 0;
        position: absolute;
        backdrop-filter: blur(10px);
        background-color: #47536387;
        z-index: -10;
        margin: 0;
        transform: translateY(-2rem);
        transition: all 0.2s ease;
        box-shadow: 1px 1px 9px #00000080;
        border-radius: 4px;
        visibility: hidden;
        &.open {
            opacity: 1;
            visibility: visible;
            z-index: 10;
            display: block;
            transform: translateY(27px);
            top: 13px;
        }
        li {
            margin: 0;
        }
        svg {
            fill: #bfbfbf;
        }
    `

    const Item = styled.div`
        padding: 0.6rem;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 13px;
        cursor: pointer;
        svg {
            margin-right: 0.5rem;
        }
        &:hover {
            background-color: var(--selected-menu-color);
        }
    `

    const Separator = styled.div`
        width: 100%;
        height: 1px;
        background-color: #e6e6e638;
        margin-top: 0.5rem;
    `

    const Overlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        width: 100vw;
        z-index: 1;
    `

    export default Login