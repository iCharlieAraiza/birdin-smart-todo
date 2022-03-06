import React,{ useState } from 'react'
import styled from 'styled-components'
import { getMonth } from '../../utils/calendarUtils'
import { Popup } from 'semantic-ui-react'
import {AiFillInfoCircle} from 'react-icons/ai'
import Calendar from '../../components/Calendar'
import { TaskSectionTitle } from '../../components/General'


const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
    <TaskSection>
      <CalendarSection>
        <TaskSectionTitle>
          Tasks <Popup content='In this section, you will manage all your scheduled tasks' trigger={<AiFillInfoCircle />} />
        </TaskSectionTitle>
        <Calendar month={currentMonth} />
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


export default Main