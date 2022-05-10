import React, {useState} from 'react'
import ModaWrapper from '../Modal/ModaWrapper'
import styled from 'styled-components'
import LabelDropdown from '../Details/components/LabelDropdown'
import PriorityDropdown from '../Details/components/PriorityDropdown'
import {GrClose} from 'react-icons/gr'
import {MdOutlineTimer} from 'react-icons/md'
import {FiArrowDown} from 'react-icons/fi'

const SubmitModal = ({setIsShow}) => {
    const [prioity, setPriority] = useState({
        label: 'low',
        color: 'transparent',
    }) 
    const [label, setLabel] = useState({
        "label":"none",
        "title":"Default",
        "color":"transparent"})
    return (
        <ModaWrapper toggle={()=>{}}>
            <ModalHeader>
                <ModalTitle>Add &gt; New Task</ModalTitle>
                <ModalClose>
                    <ModalCloseIcon>
                        <GrClose onClick={()=>{}} />
                    </ModalCloseIcon>
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <ModalContentWrapper>
                    <TitleInput type="text" placeholder="Task name" />
                    <DescriptionInput placeholder="Task description" />
                </ModalContentWrapper>
                <ModalForm>
                    <InputContainer>
                        <LabelDropdown selectedLabel={label} setSelectedLabel={setLabel} />
                    </InputContainer>
                    <InputContainer className='long-input'>
                        <PriorityDropdown priority={prioity} setPriority={setPriority} style={{"width":"10rem!important"}} />
                    </InputContainer>
                    <InputContainer className='long-input'>
                        <FlexContainer>
                            <TimeInput>
                                <FlexContainer>
                                    <MdOutlineTimer />
                                    Duration
                                    <FiArrowDown />
                                </FlexContainer>
                            </TimeInput>

                        </FlexContainer>
                    </InputContainer>
                </ModalForm>
            </ModalBody>
            <ModalFooter>
                <ModalFooterButton onClick={() => setIsShow(false)}>
                    <ModalFooterButtonText >Cancel</ModalFooterButtonText>
                </ModalFooterButton>
                <ModalFooterButton onClick={()=>{}}>
                    <ModalFooterButtonText >OK</ModalFooterButtonText>
                </ModalFooterButton>
            </ModalFooter>
        </ModaWrapper>
    )
}

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`

const TimeInput = styled.div`
    padding: 3px;
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

const ModalBody = styled.div`
    padding: 1rem;
    padding-top: 4px;
`

const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TitleInput = styled.input`
    display: block;
    height: 40px;
    border: none;
    background-color: transparent;
    display: block;
    font-size: 18px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #dbdbdb;
    }
`

const DescriptionInput = styled.textarea`
    display: block;
    background-color: transparent;
    border: none;
    width: 469px;
    height: 60px;
    resize: none;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #dbdbdb;
    }
`

const ModalForm = styled.form`
    display: flex;
    align-items: center;
    .priority-dropdown{
        width: 9rem;
    }
`

const InputContainer = styled.div`
    width: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #344a66;
    padding: 4px;
    padding-right: 0;
    margin-right: 0.5rem;
    font-size: 12px;
    &.long-input{
        width: 8.3rem;
    }
`


const ModalContentTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`

const ModalContentText = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #dbdbdb;
`

const ModalFooter = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 12px 1rem;
    border-top: 1px solid #e6e6e64d;
    background-color: #ffffff0a;

`

const ModalFooterButton = styled.div`
    cursor: pointer;
    padding: 0.5rem 1rem;
    //border: 1px solid #e6e6e6;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
    background-color: #4d5066;
    border: 1px solid gray;
    margin-left: 5px;
    &:hover{
        background-color: #878787;
    }
`

const ModalFooterButtonText = styled.div`
    font-size: 12px;
    font-weight: 600;

`

export default SubmitModal