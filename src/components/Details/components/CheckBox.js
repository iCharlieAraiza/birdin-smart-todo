import React from 'react'
import styled from 'styled-components'
import { GoCheck } from 'react-icons/go'

const CheckButton = ({check = false, handlerCheck }) => {


    if (check) {
        return (
            <CheckBtn className='active' onClick={handlerCheck}>
                <GoCheck />
            </CheckBtn>
        )
    } else {
        return <CheckBtn onClick={handlerCheck}/>
    }
}

const CheckBtn = styled.div `
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid #ffffffb0;
    margin: 0 0.3rem;
    cursor: pointer;
    min-width: 1rem;
    &.active{
        background-color: #637c91;
    }
`


export default CheckButton