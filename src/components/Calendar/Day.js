import React, { useContext } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import GlobalContext from '../../context/GlobalContext'
import {StatusLight} from '../General/index'

const Day = ({day, month, index}) => {
    const { daySelected, setDaySelected, setTitle } = useContext(GlobalContext)

    const getCurrentDay = () => {  
        return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');
    }

    const handeDayClick = () => {
        setDaySelected(day)
        setTitle('')
        console.log('clicked day: ', day.format('DD-MM-YYYY'))
    } 

    const getDayClass = (day) => {
        const format = 'DD-MM-YYYY'
        const currentDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)

        let className = '';

        if (getCurrentDay()){
            className = 'active '
        }

        if (currentDay == slcDay) {
            className += 'selected '
        }        

        return className
    }

    return (
        <DayWrapper className={ `${ getDayClass(day) } ${ (index == 0 || index == 6) && 'inactive' }` }
                    onClick={handeDayClick}>
            <DayContainer>
                <DayNumber className={ month !=  day.format('M') - 1 && 'inactive'}>
                    {day.format('DD')}
                </DayNumber>
            </DayContainer>
            <DayInfo>
                <DayLabel>
                    12 Regular task
                </DayLabel>
                <DayLabel>
                    Important task
                </DayLabel>
                <DayLabel>
                    8 / 10 copleted
                </DayLabel>
            </DayInfo>
            <StatusBar>
                <StatusLight status={'completed'}/>
            </StatusBar>
        </DayWrapper>
    )
}

const DayWrapper = styled.div`
    border: 1px solid #ccc3;
    height: 115px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.active {
        background-color: var(--today-calendar-bg-color)!important;
    }
    &.inactive {
        background-color: var(--inactive-calendar-bg-color);
    }
    &.selected {
        background-color: #ffffff38;
    }
`

const DayContainer = styled.div`
    display: flex;
    justify-content: end;
    margin: 5px;
    `


const DayNumber = styled.div`
    font-size: 0.8rem;
    text-align: center;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #607C8C;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.inactive {
        color: gray;
        background-color: #394d58;
    }
  `

const StatusBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 100%;
    margin-bottom: 5px;
`
const DayInfo = styled.div`
    flex-basis: 100%;
    flex-grow: 999;
`

const DayLabel = styled.div`
    margin: 2px 3px;
    text-align: center;
    background-color: #80808059;
    font-size: 11px;
    padding: 2px;
    user-select: none;
`


export default Day