import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { TaskSectionTitle } from '../General'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'

/*
    Min: 1:37
*/

const Todo = () => {
    const {title, setTitle, daySelected, setDaySelected} = useContext(GlobalContext)

    return (
        <TodoWrapper>
            <TaskSectionTitle>
                To Do
            </TaskSectionTitle>
            <Date>
                {daySelected==null ? 'Hello' : daySelected.format('dddd DD MMMM YYYY')} 
            </Date>
            <TaskList>

            </TaskList>
            <InputContainer>
                <InputAddTask 
                name="title" 
                placeholder='Add task' 
                value={title}
                reqired
                onChange={(e) => setTitle(e.target.value)} />
            </InputContainer>
        </TodoWrapper>
    )
}

const TodoWrapper = styled.div`
    padding:0 1rem;
    border-left: 1px solid #ffffff36;
    height: 100vh;
    width: 18rem;
    margin-left: 1.5rem;
`
const TaskList = styled.div`
    height: calc(100vh - 10rem);
    overflow-y: scroll;
    `
const InputContainer = styled.div`
    height: 4rem;
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
`
const Date = styled.div`
    font-weight: 200;
    font-size: 14px;
 `

export default Todo