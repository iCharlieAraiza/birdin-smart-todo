import React, {useState} from 'react'
import styled from 'styled-components'
import SmallCalendar from './SmallCalendar'

const SmallCalendarForm = ({handleDate = () => {}, setDate, date}) => {
    return (
            <>
                <Overlay onClick={() => { 
                    handleDate()
                }}/>
                <CalendarContainer>
                    <CalendarWrapper>
                        <SmallCalendar setDate={setDate} date={date}/>
                    </CalendarWrapper>
                </CalendarContainer>
            </>
        )
}

const CalendarContainer = styled.div`
    position: relative;
    width: 0;
    `
    
const CalendarWrapper = styled.div`
    position: absolute;
    right: 0;
    background-color: #373f50db;
    top: 18px;
    z-index: 3;
    backdrop-filter: blur(6px);
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: -80vw;
    height: 100%;
    width: 100vw;
    z-index: 3;
`

export default SmallCalendarForm