import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { TaskSectionTitle } from '../../components/General'



const Task = () => {
    const {slug} = useParams()
    return (
        <div>
            <TaskSectionTitle>This is a new task {slug}</TaskSectionTitle>
        </div>
    )
}

export default Task