import React,{useState, useContext} from 'react'
import ModaWrapper from '../Modal/ModaWrapper'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'
import GlobalContext from '../../context/GlobalContext'
import firebase from '../../utils/firebase'
import {FaRegHandPaper} from 'react-icons/fa'
import DropImage from './DropImage'

const SettingsFormModal = ({setIsOpen}) => {
    const {globalUser, dispatchUserEvent} = useContext(GlobalContext)
    const [displayName, setDisplayName] = useState(globalUser.displayName)

    const handleDisplayChange = (e) => {
        setDisplayName(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const userProfile = {...globalUser,
            displayName: displayName
        }
        if(displayName.length > 0 && displayName !== globalUser.displayName){ 
            firebase.auth().currentUser.updateProfile(userProfile)
        }

        dispatchUserEvent({type: 'update', payload: userProfile})
        setIsOpen(false)
    }


    return (
        <ModaWrapper toggle={()=>{}}>
            <ModalHeader>
                <ModalTitle>Add &gt; New Task</ModalTitle>
                <ModalClose>
                    <ModalCloseIcon>
                        <GrClose onClick={() => setIsOpen(false)} />
                    </ModalCloseIcon>
                </ModalClose>
            </ModalHeader>
            <Form>
                <FormGroup>
                    <DisplayImageContainer>
                        <DropImage dispatchUserEvent={dispatchUserEvent} globalUser={globalUser}>
                            <Image>
                                { !globalUser.photoURL ? <Placeholder>{displayName?.substring(0, 2)}</Placeholder>
                                : (<><img src={globalUser.photoURL}/></>)}
                            </Image>
                            <Label className='center'> Change profile picture </Label>
                        </DropImage>
                    </DisplayImageContainer>
                </FormGroup>

                <FormGroup>
                    <Label> Display name </Label>
                    <Input type='text' placeholder='Display username ' value={displayName} onChange={handleDisplayChange}/>
                </FormGroup>

                <FormGroup>
                    <Label> Organization </Label>
                    <Input type='text' placeholder='Organization '/>
                </FormGroup>

                <FormGroup>
                    <Label> </Label>
                    <InputSubmit type='submit' value='Update' onClick={handleSubmit}/>
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
    border: 3px dashed #d2d2d2;
    border-box: border-box;
    overflow: hidden;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: var(--placeholder-profile-blue); 
    margin: 0 auto;
    cursor: pointer;
    position relative ;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    &:hover {
        &:after {
            content: "✊";
            background: #2626269e;
            width: 100%;
            font-size: 3rem;
            text-align: center;
            position: absolute;
            z-index: 479;
            height: 100%;
            left: 0;
            padding-top: 2rem;
        }
    }
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

const Placeholder = styled.h2`
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    top: 26%;
    left: 25%;
    margin: auto;
    font-size: 34px;
`


export default SettingsFormModal