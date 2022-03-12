import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { TaskSectionTitle } from '../General'
import GlobalContext from '../../context/GlobalContext'
import ListSection from '../List/ListSection'
import dayjs from 'dayjs'

/*
    Min: 1:37
    Min: 1:58. Add labels
*/

const Todo = () => {
    const {title, 
            setTitle, 
            daySelected, 
            setDaySelected, 
            dispatchCalEvent,
            savedEvents} = useContext(GlobalContext)

    const [description, setDescription] = useState('')
    
    const [dayEvents, setDayEvents] = useState([])
    
    useEffect(() => {
        const events = savedEvents.sort((a,b)=>a.position-b.position).filter(evt => dayjs(evt.date).format('DD-MM-YYYY') === daySelected.format('DD-MM-YYYY'))
        setDayEvents(events)
    }, [daySelected, savedEvents])

    const labels = ['Important','Personal', 'Work', 'Shopping', 'Other']

    const handleKeypress = e => {
      if (e.keyCode === 13 && e.target.value.trim() !== '') {
        console.log("Enter pressed", e.target.value)
        const newEvent = {
            title,
            description,
            date: daySelected.valueOf(),
            id: window.Date.now()
        }
        dispatchCalEvent({type: 'push', payload: newEvent})
        setTitle('')
      }
    };
  

    return (
        <TodoWrapper>
            <TaskSectionTitle>
                To Do
            </TaskSectionTitle>
            <Date>
                {daySelected==null ? 'Hello' : daySelected.format('dddd DD MMMM YYYY')} 
            </Date>
            <TaskList>
                { <ListSection items={dayEvents} setItems={setDayEvents}/> }

                { /*dayEvents.map((evt, idx ) => (
                    <Task key={idx}>
                        <TaskTitle>{evt.title}</TaskTitle>
                    </Task>))
                */ }
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
        </TodoWrapper>
    )
}

const TodoWrapper = styled.div`
    padding:0 1.2rem;
    border-left: 1px solid #ffffff36;
    height: 100vh;
    width: 18rem;
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