import React, {useState} from 'react'
import styled from 'styled-components'
import {RiAddFill} from 'react-icons/ri'
import SubmitModal from '../SubmitModal/SubmitModal'


const SubmitInput = ({save, item = {}, type}) => {
    const [value, setValue] = useState('')
    const [isShow, setIsShow] = React.useState(false) 
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        if(value.trim() === '') {
            return
        }
        
        item.value = value;
        save(item)
        setValue('')
    }

    const onKeyUpHandle = (e) => {
        if(e.keyCode === 13) {
            if(value.trim() === '') {
                return
            }
            item.value = value;
            save(item)
            setValue('')
    }}

    const onChange = (e) => {
        setValue(e.target.value)
    }

    console.log("type", type)

    return (
        <>
            <Wrapper >
                <AddSvgContainer onClick={()=>setIsShow(true)}>
                    <RiAddFill />
                </AddSvgContainer>
                <InputContainer placeholder='Add new task' 
                    value={value} 
                    onKeyUp={onKeyUpHandle}
                    onChange={onChange}/>
            </Wrapper>
            { isShow && <SubmitModal setIsShow={setIsShow} type={type} />}
        </>
    )
}

const AddSvgContainer = styled.div`
    cursor: pointer;
    svg{
        fill: #48b7ff;
        width: 1.5rem;
        height: 1.5rem;
    }
`

const Wrapper = styled.div`
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