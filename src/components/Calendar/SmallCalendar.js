import dayjs from 'dayjs'
import {useState, useEffect} from 'react'
import { getMonth } from '../../utils/calendarUtils'
import styled from 'styled-components'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'

const SmallCalendar = ({date, setDate}) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth(currentMonthIdx))
    const [daySelected, setDaySelected] = useState(date)
 
    useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);


    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }

    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    function getDayClass(day) {
        const format = 'DD-MM-YY'
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        console.log(daySelected)
        if (currDay === slcDay) {
            return 'selected'
        }
        if (currDay === nowDay) {
            return 'today'
        }
        return ''
    }

    const handleDayClick = (day) => {
        setDaySelected(day)
        setDate(day)
    }

    console.log(date)

    return (
        <CalendarContainer>
            <MonthTitle>
                {  dayjs(new Date(dayjs().year(), currentMonthIdx, 1)).format('MMMM YYYY') }
            </MonthTitle>
            <div>
                <ChangeBtn onClick={handlePrevMonth}>
                    <MdArrowBackIosNew />
                </ChangeBtn>
                <ChangeBtn onClick={handleNextMonth}>
                    <MdArrowForwardIos />
                </ChangeBtn>
            </div>
            <DaysOfWeek>
                {daysOfWeek.map(day => (
                    <div key={day} >{day}</div>
                ))}
            </DaysOfWeek>
            <CalendarWrapper>
                {
                    currentMonth.map((week, index) => {
                        return (<DaysOfWeek key={index}>
                            {
                                week.map((day, index) => {
                                    return (
                                        <Day key={index} day={day} index={index} className={getDayClass(day)} onClick={()=>{handleDayClick(day)}}>
                                            {day.date()}
                                        </Day>
                                    )
                                })
                            }
                        </DaysOfWeek>)
                    })
                }
            </CalendarWrapper>
        </CalendarContainer>
    )
}


const CalendarContainer = styled.div`
    padding: 1rem;
    z-index: 2;
`

const MonthTitle = styled.div`
    font-weight: bold;
    text-align: center;
` 

const ChangeBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

`

const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  div {
    font-size: 10px;
    margin: 0 3px;
  }
`

const CalendarWrapper = styled.div`
`

const Week = styled.div`
`

const Day = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    &.today{
        background-color: #606060;
    }
    &.selected{
        background-color: #4e6f83!important;
    }
`


export default SmallCalendar