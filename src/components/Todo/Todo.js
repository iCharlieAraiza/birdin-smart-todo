import React from 'react'
import styled from 'styled-components'
import { TaskSectionTitle } from '../General'

/*
    Min: 1:37
*/

const Todo = () => {
  return (
    <TodoWrapper>
      <TaskSectionTitle>
        Tasks List
      </TaskSectionTitle>
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


export default Todo