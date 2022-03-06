import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)

    const handlePreviousMonth = () => {
        setMonthIndex(monthIndex - 1)
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }

    return (
        <Header>
            <Button onClick={handlePreviousMonth}>
                <AiOutlineArrowLeft  />
            </Button>
            <Button onClick={handleNextMonth}>
                <AiOutlineArrowRight />
            </Button>
            <Month>
                { dayjs( new Date(dayjs().year(), monthIndex)).format('MMMM YYYY') }
            </Month>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    margin: 1rem 0;
`

const Month = styled.div`
    margin-left: 1rem;
    font-weight: bold;
`

const Button = styled.button`
    background: transparent;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer ;
`




export default CalendarHeader