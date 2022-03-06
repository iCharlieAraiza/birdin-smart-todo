import React from 'react'
import styled from 'styled-components'
import { getMonth } from '../../utils/calendarUtils'
import { Popup } from 'semantic-ui-react'
import {AiFillInfoCircle} from 'react-icons/ai'
import Calendar from '../../components/Calendar'

const Main = () => {
  console.table(getMonth(2))

  return (
    <TaskSection>
      <CalendarSection>
        <TaskSectionTitle>
          Tasks <Popup content='In this section, you will manage all your scheduled tasks' trigger={<AiFillInfoCircle />} />
        </TaskSectionTitle>
        <Calendar />
      </CalendarSection>
    </TaskSection>
  )
}

const TaskSection = styled.div`
  display: flex;
`

const CalendarSection = styled.div`
  flex-basis: 40rem;
  flex-grow: 999;
  min-width: 60%;
`

const TaskSectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  svg {
    margin-left: 0.5rem;
    opacity: 0.5;
  }
`


export default Main