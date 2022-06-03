    import React, {useState} from 'react'
    import styled from 'styled-components'
    import { RiUserFill } from 'react-icons/ri'
    import { MdKeyboardArrowDown } from 'react-icons/md'
    import { BiLogOut } from 'react-icons/bi'
    import { AiOutlineUser } from 'react-icons/ai'
    import { BsGearFill } from 'react-icons/bs'

    const Login = () => {
        const user = null

        const [open, setOpen] = useState(false)

        const handleClick = () => {
            setOpen(!open)
        }

        return (
            <>
                <Wrapper>
                    <UserCard onClick={handleClick} className={open && 'open'}>
                        <ProfileAvatar className='profile-avatar'>
                            <RiUserFill/>
                        </ProfileAvatar>    
                        <UserName>{user?.name != null? user.name : 'Default User' }</UserName>
                        <SelectorArrow>
                            <MdKeyboardArrowDown/>
                        </SelectorArrow>
                    </UserCard>
                    <MenuList className={open && 'open'}>
                        <Item onClick={handleClick}><AiOutlineUser/>My Profile</Item>
                        <Item onClick={handleClick}><BsGearFill/>Settings</Item>
                        <Separator/>
                        <Item onClick={handleClick}> <BiLogOut/>Log Out</Item>
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
    `

    const UserName = styled.div`
        text-transform: capitalize;
    `

    const SelectorArrow = styled.div`
        margin-left: auto;
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
        transition: all 0.15s ease;
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
            background-color: #0573e45e;
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