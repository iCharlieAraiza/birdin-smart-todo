import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import { AiOutlineArrowRight } from 'react-icons/ai'


const TaskDetails = () => {
    const { selectedEvent, setSelectedEvent, dispatchCalEvent } = useContext(GlobalContext)
    const [id, setId  ]= useState(selectedEvent.id);
    const [title, setTitle] = useState(selectedEvent.title)
    const [description, setDescription] = useState(selectedEvent.description)
    const [date, setDate] = useState(selectedEvent.date)
    const [labels, setLabels] = useState(selectedEvent.labels)
    const [showTitleInp, setShowTitleInp] = useState(false)


    useEffect(() => {
        updateEvent()     
    }, [selectedEvent])

    const updateEvent = () => {
        setTitle(selectedEvent.title)
        setDescription(selectedEvent.description)
        setDate(selectedEvent.date)
        setLabels(selectedEvent.labels)
        setId(selectedEvent.id)
        console.log('selectedEvent update: ', selectedEvent)
    }

    const createUpdateEvent = () => {
        const newEvent = {
            title,
            description,
            date,
            id,
            labels
        }
        dispatchCalEvent({type: 'update', payload: newEvent})
        //setSelectedEvent(null)
    }
    
    const updateTitle = (el)=>{
        setTitle(el.target.value)
    }

    const updateDescription = (el) => {
        setDescription(el.target.value)
        console.log('description update: ', description)
    }

    const handlerFocus = (el) => {
        setTitle(el.target.textContent)
        //console.log(  el.target.textContent )
        const newEvent = {
            title: el.target.textContent,
            description,
            date,
            id,
            labels
        }
        dispatchCalEvent({type: 'update', payload: newEvent})
    }

    return (
        <TaskDetailsBar>
            <Overlay onClick={ () => setSelectedEvent(null)}>
            </Overlay>
            <TaskMenu>
                <TitleInput value={title} onBlur={handlerFocus} role="textbox" contentEditable={true} suppressContentEditableWarning={true}>
                    { title }  
                </TitleInput>
                <Separator/>
                <DateSection>
                    { date!=null&& dayjs(date). format('DD / MMMM / YYYY') }
                </DateSection>
                <Separator/>
                <Priority>
                    <PriorityLabel>
                        High <Label></Label>
                    </PriorityLabel>
                </Priority>
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


const TitleInput = styled.span`
    width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    border: none;
    display: block;
    margin-top: 4rem;

    &:focus {
        outline: none;
    }
`

const TaskTitle = styled.div`
    display: block;
    background: transparent;
    border: none;
    align-items: center;
    font-size: 1.5rem!important;
    margin-top: 4rem;
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
    right: 20.5rem;
    width: calc(100vw - 20.5rem);
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
    width: 19rem;
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
    width: 4rem;
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


export default TaskDetails