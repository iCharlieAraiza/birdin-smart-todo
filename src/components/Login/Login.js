import React, {useState} from 'react'
import styled from 'styled-components'
import { RiUserFill } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'


const Login = () => {
    const user = null

    const [open, setOpen] = useState(false)

    return (
        <Wrapper>
            <UserCard onClick={() => setOpen(!open)} className={open && 'open'}>
                <ProfileAvatar>
                    <RiUserFill/>
                </ProfileAvatar>    
                <UserName>{user?.name != null? user.name : 'new user' }</UserName>
                <SelectorArrow>
                    <MdKeyboardArrowDown/>
                </SelectorArrow>
            </UserCard>
            <MenuList className={open && 'open'}>
                <Button>Sign Out</Button>
            </MenuList> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

const UserCard = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    padding: 7px 6px;
    border: 1px solid transparent;
    border-radius: 5px;
    &.open {
        border: 1px #e0e0e047 solid;
        background-color: #ffffff17;
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
    list-style: none;
    padding: 0;
    width: 100%;
    left: 0;
    position: absolute;
    top: 0px;
    backdrop-filter: blur(6px);
    background-color: #818fa361;
    top: 0px;
    z-index: 0;
    margin: 0;
    transform: translateY(-200px);
    transition: all 0.4s ease;
    opacity: 0;

    &.open {
        z-index: 10;
        display: block;
        transform: translateY(100px);
        opacity: 1;
        top: 14px;
    }
    li {
        margin: 0;
    }
`

const Button = styled.div`
    padding: 1rem;
`

export default Login