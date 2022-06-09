import React,{useState} from 'react'
import ModaWrapper from '../Modal/ModaWrapper'
import styled from 'styled-components'

const SettingsFormModal = () => {

    return (
        <ModaWrapper toggle={()=>{}}>
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
    padding: 4rem 1rem;

    .center {
        text-align: center;
    }
`

const FormGroup = styled.div`
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 340px;
`

const Label = styled.label`
    display: block;
    padding: 8px 0;
    font-weight: 500;
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


export default SettingsFormModal