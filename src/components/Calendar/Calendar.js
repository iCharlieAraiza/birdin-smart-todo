import React from 'react'
import styled from 'styled-components'
import Day from './Day'
import CalendarHeader from './CalendarHeader'

const Calendar = ({ month }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <>
      <CalendarSection>
        <CalendarHeader />
        <DaysOfWeek>
          {daysOfWeek.map(day => (
            <div key={day}>{day}</div>
          ))}
        </DaysOfWeek>
        <CalendarWrapper>
          { 
            month.map((week, index) => {
              return (
                <Week key={index}>
                  {week.map((day, index) => {
                    return (
                      <Day key={index} day={day} />
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
  max-width: 1200px;
`



const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`

const CalendarWrapper = styled.div`

`

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`


/*
const Day = styled.div`
  border: 1px solid #ccc;
  height: 8rem ;
`

const DayNumber = styled.div`
  font-size: 1.5rem;
`
*/
export default Calendar