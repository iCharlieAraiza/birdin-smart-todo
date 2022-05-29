import React, {useContext} from 'react'
import styled from 'styled-components'
import Day from './Day'
import CalendarHeader from './CalendarHeader'
import GlobalContext from '../../context/GlobalContext'

const Calendar = ({ month }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const { monthIndex, daySelected, setDaySelected } = useContext(GlobalContext)

  return (
    <>
      <CalendarSection>
        <CalendarHeader />
        <DaysOfWeek>
          {daysOfWeek.map(day => (
            <div key={day} >{day}</div>
          ))}
        </DaysOfWeek>
        <CalendarWrapper>
          { 
            month.map((week, index) => {
              return (
                <Week key={index}>
                  { week.map((day, index) => {
                    return (
                      <Day key={index} month={monthIndex} day={day} index={index} />
                    )
                  }
                  )}
                </Week>
              )
            }
            )
          }
        </CalendarWrapper>
      </CalendarSection>
    </>
  )
}

const CalendarSection = styled.div` 
  max-width: 1280px;
  margin-top: 1.5rem;
  overflow: scroll;
  min-width: 660px;
  user-select: none

`



const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`

const CalendarWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #ffffff2e;
  overflow: hidden;
`

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

export default Calendar