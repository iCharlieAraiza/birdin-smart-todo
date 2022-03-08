import React, { useContext } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import GlobalContext from '../../context/GlobalContext'


const Day = ({day, month, index}) => {
    const { daySelected, setDaySelected } = useContext(GlobalContext)

    const getCurrentDay = () => {  
        return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');
    }

    const handeDayClick = () => {
        setDaySelected(day)
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
        </DayWrapper>
    )
}

const DayWrapper = styled.div`
    border: 1px solid #ccc3;
    height: 115px;
    &.active {
        background-color: var(--today-calendar-bg-color)!important;
    }
    &.inactive {
        background-color: var(--inactive-calendar-bg-color);
    }
    &.selected {
        background-color: black;
    }
`

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    `


const DayNumber = styled.div`
    font-size: 0.9rem;
    text-align: right;
    &.inactive {
        color: gray;
    }
  `


export default Day