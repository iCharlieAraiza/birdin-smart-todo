import React, {useState} from 'react'
import styled from 'styled-components'
import { RiUserFill } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'


const Login = () => {
    const user = null

    const [open, setOpen] = useState(false)

    return (
        <Wrapper>
            <UserCard onClick={() => setOpen(!open)}>
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
    &:hover{
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
    top: 29px;
    backdrop-filter: blur(6px);
    background-color: #818fa361;
    top: 0px;
    z-index: 10;
    margin: 0;
    display: none;
    &.open {
        display: block;
        transform: translateY(40px);
        transition: all 0.3s ease-in-out;
    }
    li {
        margin: 0;
    }
`

const Button = styled.div`
    padding: 1rem;
`

export default Login