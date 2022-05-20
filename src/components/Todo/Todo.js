import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { TaskSectionTitle } from '../General'
import GlobalContext from '../../context/GlobalContext'
import ListSection from '../List/ListSection'
import dayjs from 'dayjs'
import { Resizable } from "re-resizable";
import PlaceholderInbox from '../General/PlaceholderInbox'
import ObjectStructure from '../../utils/ObjectStructure'

/*
    Min: 1:37
    Min: 1:58. Add labels
*/

const WIDTH_SIZE = 300;

const Todo = () => {
    const {title, 
            setTitle, 
            daySelected, 
            setDaySelected, 
            setSelectedEvent,
            selectedEvent,
            dispatchCalEvent,
            savedEvents, 
            setLeftBarWidth,
            dayStatus,
            setDayStatus,
            updateCalendar
        } = useContext(GlobalContext)

    const [description, setDescription] = useState('')
    
    const [dayEvents, setDayEvents] = useState([])

    const [moveElement, setMoveElement] = useState(null)
    
    useEffect(() => {
        setLeftBarWidth(WIDTH_SIZE)
    }, [])
 
    useEffect(() => {
        const events = savedEvents.sort((a,b)=>a.position-b.position).filter(evt => dayjs(evt.date).format('DD-MM-YYYY') === daySelected.format('DD-MM-YYYY'))
        setDayEvents(events.sort((a,b)=>a.position-b.position))
        console.table(events)
        console.log("Day events", events)
    }, [daySelected, savedEvents, moveElement])

    const labels = ['Important','Personal', 'Work', 'Shopping', 'Other']

    const handleKeypress = e => {
      if (e.keyCode === 13 && e.target.value.trim() !== '') {
        console.log("Enter pressed", e.target.value)
        let newEvent = ObjectStructure()
         newEvent = {...newEvent,
            title,
            description,
            date: daySelected.valueOf(),
            id: window.Date.now()
        }

        dispatchCalEvent({type: 'push', payload: newEvent})
        setTitle('')
      }
    };
  
    const style = {
        padding:"0 1.2rem",
        borderLeft: "1px solid #ffffff36",
        height: "100vh",
        width: "19rem"
    }

    const handleResize = (e) => {
        console.log('Resize: ', e)
        console.log('Window: ',  window.innerWidth)
        let width = window.innerWidth - e.clientX
        width = width < 220 ? 220 : width
        console.log('handleResize', width)
        setLeftBarWidth(width > 380 ? 380 : width)
    }

    const resizeTo = () => {
        if(setSelectedEvent!=null) {
            setSelectedEvent(null)
        }
    }

    return (
        <Resizable style={style} 
                    defaultSize={{
                        width: WIDTH_SIZE,
                    }}
                    minWidth="220" 
                    maxWidth="380" 
                    minHeight="100vh"
                    maxHeight="100vh"
                    onResizeStart={resizeTo} 
                    onResizeStop={handleResize} >
            <TaskSectionTitle>
                To Do
            </TaskSectionTitle>
            <Date>
                {daySelected==null ? 'Hello' : daySelected.format('dddd DD MMMM YYYY')} 
            </Date>
            <TaskList>
                {dayEvents.length > 0 
                    ? <ListSection items={dayEvents} setItems={setDayEvents} setMoveElement={setMoveElement}/> 
                    : <PlaceholderInbox/>}
            </TaskList>
            <InputContainer>
                <InputAddTask 
                name="title" 
                placeholder='+ Add task' 
                value={title}
                reqired
                onChange={(e) => setTitle(e.target.value)} 
                onKeyUp={handleKeypress}
                />
            </InputContainer>
        </Resizable>
    )
}

const TodoWrapper = styled.div`
    padding:0 1.2rem;
    border-left: 1px solid #ffffff36;
    height: 100vh;
    width: 19rem;
`
const TaskList = styled.div`
    height: calc(100vh - 11rem);
    overflow-y: scroll;
    `
const InputContainer = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ffffff36;
    `
const InputAddTask = styled.input`
    width: 100%;
    border: none;
    padding: 0.3rem ;
    font-size: 1rem;
    background-color:transparent ;
    &:focus {
        outline: none;
        border: 1 solid gray;
    }
    &::placeholder{
        color: var(--text-color);
    }
`
const Date = styled.div`
    font-weight: 200;
    font-size: 14px;
 `

const Task = styled.div`
`

const TaskTitle = styled.div`
`

export default Todo