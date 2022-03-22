import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import CheckButton from './CheckButton.js'
import { MdOutlineTimer } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { FlexCenter } from '../General'
import LabelDropdown from './Form/LabelDropdown'

const TaskDetails = () => {
    const { selectedEvent, setSelectedEvent, savedEvents, dispatchCalEvent, leftBarWidth } = useContext(GlobalContext)
    const [id, setId  ]= useState(selectedEvent.id);
    const [title, setTitle] = useState(selectedEvent.title)
    const [description, setDescription] = useState(selectedEvent.description)
    const [date, setDate] = useState(selectedEvent.date)
    const [labels, setLabels] = useState(selectedEvent.labels)
    const [isChecked, setIsChecked] = useState(selectedEvent.isChecked == undefined ? false : selectedEvent.isChecked)
    const [estimatedTime, setEstimatedTime] = useState(selectedEvent.estimatedTime == undefined ? 0 : selectedEvent.estimatedTime)
    const [kindOfEstimated, setKindOfEstimated] = useState(selectedEvent.kindOfEstimated == undefined ? 'minutes' : selectedEvent.kindOfEstimated)
    const [showTitleInp, setShowTitleInp] = useState(false)


    useEffect(() => {
        updateEvent()     
    }, [selectedEvent])


    useEffect(() => {
        createUpdateEvent()
    }, [labels])


    const updateEvent = () => {
        setTitle(selectedEvent.title)
        setDescription(selectedEvent.description)
        setDate(selectedEvent.date)
        setLabels(selectedEvent.labels == undefined ? null : selectedEvent.labels)
        setId(selectedEvent.id)
        setIsChecked(selectedEvent.isChecked)
        setEstimatedTime(selectedEvent.estimatedTime == undefined ? 0 : selectedEvent.estimatedTime)
        setKindOfEstimated(selectedEvent.kindOfEstimated  == undefined ? 'minutes' : selectedEvent.kindOfEstimated)
        console.log('Is selectedEvent updated: ', selectedEvent)
    }

    const KIND_OF_ESTIMATED_OPTIONS = [
        {value: 'minutes', label: 'Minutes'},
        {value: 'hours', label: 'Hours'},
        {value: 'pomodoro', label: 'Pomodoro'},
    ]


    function createUpdateEvent() {
        const newEvent = {
            title,
            description,
            date,
            id,
            estimatedTime,
            kindOfEstimated,
            labels,
            isChecked
        }
        dispatchCalEvent({type: 'update', payload: newEvent})
        //setSelectedEvent(null)
    }

    const updateTime = (el) =>{
        console.log('el.target.value: ', el.target.value)
        if (el.target.value != selectedEvent.estimatedTime ) {
            createUpdateEvent()
        }
    }

    const updateKindOfEstimated = (el) =>{
        console.log('el.target.value: ', el.target.value)
        if (el.target.value != selectedEvent.kindOfEstimated ) {
            createUpdateEvent()
        }
    }

    const updateDescription = (el) => {
        setDescription(el.target.value)
        console.log('description update: ', description)
    }

    const handlerFocus = (el) => {
        if ( el.target.textContent != title) {
            setTitle(el.target.textContent)
            const newEvent = {
                title: el.target.textContent,
                description,
                date,
                id,
                estimatedTime,
                kindOfEstimated,
                labels
            }
            dispatchCalEvent({type: 'update', payload: newEvent})
        }else{
            console.log('same title')
        }
    }

    const handlerCheck = () => {
        console.log('isChecked: ', isChecked)
        const newEvent = {
            title,
            description,
            date,
            id,
            labels,
            kindOfEstimated,
            isChecked: !isChecked
        }
        setIsChecked(!isChecked)
        console.log('isChecked: ', isChecked)
        dispatchCalEvent({type: 'update', payload: newEvent})
    }

    return (
        <TaskDetailsBar width={leftBarWidth + 'px'}>
            <Overlay onClick={ () => setSelectedEvent(null)}>
            </Overlay>
            <TaskMenu>
                <CheckSection>
                    <CheckButton check={isChecked} handlerCheck={handlerCheck} />
                    <TitleInput className={isChecked&& 'checked' } value={title} onBlur={handlerFocus} role="textbox" contentEditable={true} suppressContentEditableWarning={true}>
                        { title }  
                    </TitleInput>
                </CheckSection>
                <Separator/>
                <DateSection>
                    <LabelSection>Date</LabelSection>
                    <FlexCenter>
                        <BsCalendar3 /> { date!=null&& dayjs(date). format('DD / MMMM / YYYY') }
                    </FlexCenter>
                </DateSection>
                <Separator/>
                <Priority>
                    <LabelSection>Labels</LabelSection>
                    <PriorityLabel>
                        <LabelDropdown selectedLabel={labels} setSelectedLabel={setLabels}/>
                    </PriorityLabel>
                </Priority>
                <Separator/>
                <TimeToComplete>
                    <LabelSection>Allocate time</LabelSection>
                    <FlexCenter>
                        <MdOutlineTimer />
                        <InputTime type="number" min='0' 
                        value={estimatedTime} 
                        onChange={(e)=>setEstimatedTime(e.target.value)}
                        onBlur={updateTime}>
                        </InputTime>
                        <SelectKindOfTime 
                        value={kindOfEstimated} 
                        onChange={(e)=>{    
                            setKindOfEstimated(e.target.value); 
                            updateKindOfEstimated(e)}}
                        onBlur={updateKindOfEstimated}>
                            {KIND_OF_ESTIMATED_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </SelectKindOfTime>
                    </FlexCenter>

                </TimeToComplete>
                <Separator/>
                <Description placeholder='Add a note' value={description} onChange={updateDescription}>
                </Description>
                <Separator/>
                <SaveNote>
                    <SaveBtn onClick={createUpdateEvent}>
                        <AiOutlineArrowRight />
                        Add Note
                    </SaveBtn>
                </SaveNote>
            </TaskMenu>
        </TaskDetailsBar>
    )
}


const CheckSection = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
`

const TitleInput = styled.span`
    width: 100%;
    background-color: transparent;
    font-size: 1.3rem;
    border: none;
    display: block;
    margin-left: 6px;

    &:focus {
        outline: none;
    }

    &.checked{
        text-decoration: line-through;
        opacity: 0.5;
    }
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #8d8d8d30;
    margin: 1rem 0; 
`


const TaskDetailsBar = styled.div`
    position: absolute;
    top: 0;
    //right: 21.5rem;
    right: ${props => props.width};
    width: calc(100vw - ${props => props.width});
    height: 100vh;
    display: flex;
    animation:fadein .5s;
`

const Overlay = styled.div`
    background: #0000006e;
    height: 100vh;
    flex-grow: 999;   

`

const TaskMenu = styled.div`
    background: var(--navbar-bg-color);
    width: 20rem;
    height: 100vh;
    padding: 0 1rem;
`

const Priority = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`

const PriorityLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    border-radius: 50%;
`

const Label = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: #ffffff00;
    border: 2px solid #ffffffb0;
    border-radius: 50%;
    margin-left: 0.5rem;
`
const Description = styled.textarea`
    display: block;
    background-color: transparent;
    min-height: 6rem;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
`

const DateSection = styled.div`
    opacity: 0.65;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        margin-right: 1rem;
    }
`

const TimeToComplete = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.5rem;
    }
`

const InputTime = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gray;
    width: 2.8rem;
    margin-right: 0.5rem;
    text-align: center;
    &:focus{
        outline: none;
    }
`

const SelectKindOfTime = styled.select`
    background-color: transparent;
    border: none;
    width: 6rem;
    &:focus{
        outline: none;
    }
`

const SaveNote = styled.div`
    display: flex;
    justify-content: end;
    svg{
        width: 18px;
        height: 18px;
    }
`
const SaveBtn = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: bisque;
`

const LabelSection = styled.span`
    color: lightgrey!important;
`


export default TaskDetails