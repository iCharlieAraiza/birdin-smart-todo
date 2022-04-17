import React from 'react'
import styled from 'styled-components'
import {RiAddFill} from 'react-icons/ri'


const SubmitInput = () => {
  return (
    <Wrapper>
        <AddSvgContainer>
            <RiAddFill />
        </AddSvgContainer>
        <InputContainer placeholder='Add new task'/>
    </Wrapper>
  )
}

const AddSvgContainer = styled.div`
    svg{
        fill: white;
    }
`

const Wrapper = styled.div`
    display: flex;
    color: #fff;
`
const InputContainer = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    &:focus {
        outline: none;
    }
`

export default SubmitInput