import React, {useContext} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'


const TaskDetails = () => {
    const { selectedEvent, setSelectedEvent } = useContext(GlobalContext)

    return (
        <TaskDetailsBar>
            <Overlay onClick={ () => setSelectedEvent(null)}>
            </Overlay>
            <TaskMenu>

            </TaskMenu>
        </TaskDetailsBar>
    )
}

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
    width: 21rem;
    height: 100vh;
`

export default TaskDetails