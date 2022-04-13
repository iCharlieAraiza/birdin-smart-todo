import React from 'react'
import styled from 'styled-components'


const SubmitInput = () => {
  return (
    <Wrapper>
        +
        <InputContainer placeholder='Add new task'/>
    </Wrapper>
  )
}

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