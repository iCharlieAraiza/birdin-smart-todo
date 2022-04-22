import React,{ useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { getMonth } from '../../utils/calendarUtils'
import { Popup } from 'semantic-ui-react'
import {AiFillInfoCircle} from 'react-icons/ai'
import Calendar from '../../components/Calendar'
import { TaskSectionTitle } from '../../components/General'
import GlobalContext from '../../context/GlobalContext'
import Todo from '../../components/Todo'

const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth( getMonth(monthIndex) )
  }, [monthIndex])


  return (
    <TaskSection>
      <CalendarSection>
        <TaskSectionTitle>
          Schedule Tasks <Popup content='In this section, you will manage all your scheduled tasks' trigger={<AiFillInfoCircle />} />
        </TaskSectionTitle>
        <Calendar month={currentMonth} />
      </CalendarSection>
      <FixedTodoBar>
        <Todo />
      </FixedTodoBar>
    </TaskSection>
  )
}

const TaskSection = styled.div`
  display: flex;
  flex-basis: 40rem;
  flex-grow: 999;
  min-width: 60%;

`

const CalendarSection = styled.div`
  flex-basis: 40rem;
  flex-grow: 999;
  min-width: 60%;
  height: 98vh;
  padding-right: 1.5rem;
  overflow: scroll;
`



const FixedTodoBar = styled.div`
  background-color: var(--bg);
  position: relative;
`

export default Main