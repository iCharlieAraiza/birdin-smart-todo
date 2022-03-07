import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const Day = ({day, month, index}) => {
    const getCurrentDay = () => {  
        return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');
    }

    return (
        <DayWrapper className={ `${getCurrentDay()&& 'active'} ${ (index == 0 || index == 6) && 'inactive' }` }>
            <DayContainer>
                <DayNumber className={ month !=  day.format('M') - 1 && 'inactive'}>
                    { console.log("Day" + day.format('DD') + "Index" + index) }
                    {day.format('DD')}
                </DayNumber>
            </DayContainer>
        </DayWrapper>
    )
}

const DayWrapper = styled.div`
    border: 1px solid #ccc3;
    height: 8rem ;
    &.active {
        background-color: var(--today-calendar-bg-color);
    }
    &.inactive {
        background-color: var(--inactive-calendar-bg-color);
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