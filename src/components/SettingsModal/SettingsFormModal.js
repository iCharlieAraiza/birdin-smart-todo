import React,{useState} from 'react'
import ModaWrapper from '../Modal/ModaWrapper'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'

const SettingsFormModal = () => {

    return (
        <ModaWrapper toggle={()=>{}}>
            <ModalHeader>
                <ModalTitle>Add &gt; New Task</ModalTitle>
                <ModalClose>
                    <ModalCloseIcon>
                        <GrClose onClick={() => setIsShow(false)} />
                    </ModalCloseIcon>
                </ModalClose>
            </ModalHeader>
            <Form>
                <FormGroup>
                    <DisplayImageContainer>
                        <Image>
                        </Image>
                    </DisplayImageContainer>
                    <Label className='center'> Change profile picture </Label>
                </FormGroup>

                <FormGroup>
                    <Label> Display name </Label>
                    <Input type='text' placeholder='Display username '/>
                </FormGroup>

                <FormGroup>
                    <Label> Organization </Label>
                    <Input type='text' placeholder='Organization '/>
                </FormGroup>

                <FormGroup>
                    <Label> </Label>
                    <InputSubmit type='submit' value='Update'/>
                </FormGroup>

            </Form>
        </ModaWrapper>
  )
}

const Form = styled.form`
    padding: 2rem 1rem;
    padding-bottom: 2rem; 
`

const FormGroup = styled.div`
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 380px;
`

const Label = styled.label`
    display: block;
    padding: 8px 0;
    font-weight: 500;
    &.center {
        text-align: center;
    }
`

const Input = styled.input`
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px #dbdbdb solid;
    padding: 10px;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`

const DisplayImageContainer = styled.div`
`


const Image = styled.div`
    overflow: hidden;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: var(--placeholder-profile-blue); 
    margin: 0 auto;
    cursor: pointer;
`

const InputSubmit = styled.input`
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px;
    background-color: #37648a;
    border: none;
    font-weight: 700;
    cursor: pointer;
`

const FormHeader  = styled.div`
    padding: 14px 2rem;
    background-color: #00000033;
    margin: 0;
    p {
        margin: 0;
    }
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e6e6e642;
`


const ModalTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
`

const ModalClose = styled.div`
    cursor: pointer;
`

const ModalCloseIcon = styled.div`
    opacity: 0.75;
    svg{
        margin: 0;
        font-size: 14px;
    }
    filter: invert(100%) sepia(1%) saturate(7469%) hue-rotate(306deg) brightness(103%) contrast(100%);
`


export default SettingsFormModal