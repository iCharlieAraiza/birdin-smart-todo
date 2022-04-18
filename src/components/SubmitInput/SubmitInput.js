import React, {useState} from 'react'
import styled from 'styled-components'
import {RiAddFill} from 'react-icons/ri'


const SubmitInput = () => {
    const [value, setValue] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        if(value.trim() === '') {
            return
        }
        console.log(value)
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <Wrapper onSubmit={onFormSubmit}>
            <AddSvgContainer>
                <RiAddFill />
            </AddSvgContainer>
            <InputContainer placeholder='Add new task' value={value} onChange={onChange}/>
        </Wrapper>
    )
}

const AddSvgContainer = styled.div`
    svg{
        fill: #48b7ff;
        width: 1.5rem;
        height: 1.5rem;
    }
    }
`

const Wrapper = styled.form`
    display: flex;
    color: #fff;
    align-items: center;
`
const InputContainer = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    &:focus {
        outline: none;
    }
    &::placeholder{
        color: white!important;
    }
`

export default SubmitInput