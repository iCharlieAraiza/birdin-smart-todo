import React, {useState, useEffect, useContext} from 'react'
import ModaWrapper from '../Modal/ModaWrapper'
import styled from 'styled-components'
import LabelDropdown from '../Details/components/LabelDropdown'
import PriorityDropdown from '../Details/components/PriorityDropdown'
import {GrClose} from 'react-icons/gr'
import {MdOutlineTimer} from 'react-icons/md'
import {AiOutlineCalendar} from 'react-icons/ai'
import { getIcon } from '../../utils/prioity-obj'
import {BsTag} from 'react-icons/bs'
import ObjectStructure from '../../utils/ObjectStructure'
import GlobalContext from '../../context/GlobalContext'
import {useOutsideAlerter} from '../../hooks/useOutsideAlerter'
import PriorityData  from '../../utils/priority.json'
import { getLabelObject } from '../../utils/label-obj'

const SubmitModal = ({setIsShow, type = ''}) => {
    //console.log("Label ASDASD", type.priority)
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [check, setCheck] = useState(false)
    const [prioity, setPriority] = useState(type.priority ? type.priority : PriorityData[0])
    const [label, setLabel] = useState(type.label ? type.label : getLabelObject('none'))

    const [time, setTime] = useState(0);
    const [kindOfTime, setKindOfTime] = useState('minutes');
    const [displayInput, setDisplayInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const {dispatchCalEvent} = useContext(GlobalContext)

    const {ref, visible, setVisible} = useOutsideAlerter(false)

    //console.log(ObjectStructure())
    
    useEffect(() => {
        updateState()}, 
        [type])

    useEffect(()=>{
        setDisplayInput('')
        setVisible(false)
    }, [prioity, label])

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const addTask = () => {
        if(title === '') {
            setErrorMessage('Please enter a title')
            return;
        }
        const newTask = ObjectStructure()
        newTask.title = title
        newTask.description = description
        newTask.isChecked = check
        newTask.priority = prioity
        newTask.labels = label
        newTask.kindOfEstimated = kindOfTime
        newTask.estimatedTime = time
        dispatchCalEvent({type: 'push', payload: newTask}) 
    }

    function updateState(){
        setPriority(type.priority ? type.priority : PriorityData[0])
        setLabel(type.label ? type.label : getLabelObject('none'))
        setTitle('')
        setDescription('')
        setCheck(false)
        setTime(0)
        setKindOfTime('minutes')
        setDisplayInput('')
        setErrorMessage('')
    }

    function handleClick() {
        setVisible(!visible)
    }
        
    console.log('njnn',prioity)

    return (
        <ModaWrapper  toggle={()=>{}}>
            <ModalHeader>
                <ModalTitle>Add &gt; New Task</ModalTitle>
                <ModalClose>
                    <ModalCloseIcon>
                        <GrClose onClick={() => setIsShow(false)} />
                    </ModalCloseIcon>
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <ModalContentWrapper>
                    <TitleInput type="text" placeholder="Task name" value={title} onChange={handleTitle} />
                    <DescriptionInput placeholder="Task description" value={description} onChange={handleDescription}/>
                </ModalContentWrapper>
                <ModalForm>
                    <InputContainer>
                        <AiOutlineCalendar />
                        No Date
                    </InputContainer>
                    
                    <FormWrapper>
                        <InputContainer onClick={()=>{
                                setDisplayInput('priority')
                                handleClick()
                            }}>
                            {prioity?.label !== 'low' ? <> {getIcon(prioity.label)} {prioity.label} </> : <>{getIcon('low')} Priority</>}
                        </InputContainer>
                        {(displayInput === 'priority' && visible) && (
                            <InputWrapper ref={ref}>
                                <InputContainer className=' short-padding'>
                                    <PriorityDropdown priority={prioity} setPriority={setPriority} style={{"width":"10rem!important"}} />
                                </InputContainer>
                            </InputWrapper>
                        )}
                    </FormWrapper>

                    <FormWrapper>
                        <InputContainer onClick={()=>{
                                setDisplayInput('label')
                                handleClick()
                        }}>
                            {label?.label !== 'none' ? <> <LabelColorIcon color={label.color}/> {label.label} </> : <><BsTag />Label</>}

                        </InputContainer>
                        {(displayInput === 'label' && visible) && (
                            <InputWrapper ref={ref}>
                                <InputContainer className='short-padding'>
                                    <LabelDropdown selectedLabel={label} setSelectedLabel={setLabel} />
                                </InputContainer>
                            </InputWrapper>
                        )}
                    </FormWrapper>
                    
                    <FormWrapper>
                        <InputContainer 
                            className='long-input' 
                            onClick={()=>{
                            setDisplayInput('duration')
                            handleClick()
                            }}>
                            <FlexContainer>
                                <TimeInputForm>
                                    <FlexContainer>
                                        <MdOutlineTimer />
                                        {
                                            (time === 0 || time === undefined || time === '')|| !kindOfTime ? (
                                                <>No Duration</>
                                            ) : (
                                                <>{time} {kindOfTime}</>
                                            )
                                        }
                                    </FlexContainer>
                                </TimeInputForm>

                            </FlexContainer>
                        </InputContainer>
                        {(displayInput === 'duration' && visible)  && (
                            <InputWrapper ref={ref}>
                                <InputContainer className='xl-long-input short-padding'>
                                    <TimeInput type='number' value={time} min="0" onChange={el => setTime(el.target.value)}/>
                                    <KindOfTimeSelect value={kindOfTime} onChange={(el) => setKindOfTime(el.target.value)}>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                        <option value="pomodoro">Pomodoro</option>
                                    </KindOfTimeSelect>
                                </InputContainer>
                            </InputWrapper>
                        )}
                    </FormWrapper>

                    {/*
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
                    */}
                </ModalForm>
            </ModalBody>
            <ModalFooter>
                <div>
                    {errorMessage}    
                </div>
                <ModalFooterButton onClick={() => setIsShow(false)}>
                    <ModalFooterButtonText>Cancel</ModalFooterButtonText>
                </ModalFooterButton>
                <ModalFooterButton className='confirm' onClick={()=>{}}>
                    <ModalFooterButtonText onClick={addTask}>+ Create Task</ModalFooterButtonText>
                </ModalFooterButton>
            </ModalFooter>
        </ModaWrapper>
    )
}

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`

const TimeInputForm = styled.div`
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
    width: 470px;
    height: 80px;
    resize: none;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #dbdbdb;
    }
`

const ModalForm = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .priority-dropdown{
        width: 9rem;
    }
`

const InputContainer = styled.div`
    width: 7rem;
    display: flex;
    align-items: center;
    background-color: rgb(255 255 255 / 10%);
    padding: 7px;
    padding-right: 0;
    font-size: 12px;
    margin: 2px;
    cursor: pointer;
    text-transform: capitalize;
    svg {
        font-size: 14px!important;
        margin-right:6px;
    }
    &.long-input {
        width: 8.3rem;
    }
    &.xl-long-input {
        width: 10rem;
    }
    &.solid {
        background: red;
    }
    &.short-padding {
        padding: 3px;
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
    padding: 0.4rem 1rem;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    background-color: #4d5066;
    border: 1px solid gray;
    margin-left: 5px;
    &:hover{
        background-color: #878787;
    }
    &.confirm {
        background-color: #2E6FD2;
    }
`

const ModalFooterButtonText = styled.div`
    font-size: 12px;
    font-weight: 600;
`

const FormWrapper = styled.div`
    position: relative;
    //width: 7.5rem;
`

const InputWrapper = styled.div`
    padding: 4px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    position: absolute;
    top: 35px;
    background-color: #374252;
    `
const TimeInput = styled.input`
    background-color: transparent;
    width: 2.5rem;
    border: none;
    display: block;
    &:focus{
        outline: none;
    }
`

const KindOfTimeSelect = styled.select`
    background-color: transparent;
    border: none;
    display: block ;
    &:focus{
        outline: none;
    }
`

const LabelColorIcon = styled.div`
    height: 12px;
    width: 12px;
    margin-right: 0.5rem;
    background-color: ${props => props.color};
    border-radius: 2px;
`
 


export default SubmitModal