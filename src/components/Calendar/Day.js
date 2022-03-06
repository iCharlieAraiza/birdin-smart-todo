import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const Day = ({day}) => {
    const getCurrentDay = () => {  
        return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');
    }
    
    return (
        <DayWrapper className={ getCurrentDay()&& 'active' }>
            <DayContainer>
                <DayNumber>
                    {day.format('DD')}
                </DayNumber>
            </DayContainer>
        </DayWrapper>
    )
}

const DayWrapper = styled.div`
  border: 1px solid #ccc;
  height: 8rem ;
  &.active {
    background-color: var(--today-calendar-bg-color);
}
`

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    `


const DayNumber = styled.div`
    font-size: 0.9rem;
    text-align: right;

  `


export default Day