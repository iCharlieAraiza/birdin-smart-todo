import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import { BsArrowReturnLeft } from 'react-icons/bs'

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex, setDaySelected } = useContext(GlobalContext)

    const handlePreviousMonth = () => {
        setMonthIndex(monthIndex - 1)
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }

    const handleResetMonth = () => {
        setMonthIndex(dayjs().month())
        setDaySelected(dayjs())
    }

    return (
        <Header>
            <ButtonToday onClick={ handleResetMonth }>
                Today 
                <BsArrowReturnLeft />
            </ButtonToday>

            <Button onClick={ handlePreviousMonth }>
                <AiOutlineArrowLeft  />
            </Button>
            <Button onClick={ handleNextMonth }>
                <AiOutlineArrowRight />
            </Button>
            <Month>
                { dayjs( new Date(dayjs().month(), monthIndex)).format('MMMM') }
                <Year>
                { dayjs( new Date(dayjs().year(), monthIndex)).format('YYYY') }
                </Year>
            </Month>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`

const Month = styled.div`
    margin-left: 1rem;
    font-weight: bold;
`

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer ;
    padding: 0;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    svg{
        font-size: 18px;
    }
    &:hover {
        background-color: #00000026;
    }
`

const ButtonToday = styled.button`
    background: transparent;
    border: none;
    cursor: pointer ;
    display: flex;

    border: 1px solid #ffffff30;
    text-transform: uppercase;
    border-radius: 2px;
    margin-right: 5px;
    padding: 10px 1rem;

    &:hover {
        background-color: #ffffff0a;
    }

    svg {
        width: 1.1rem;
        height: 1.1rem;
        margin-left: 0.5rem;
    }
`

const Year = styled.span`
    font-weight: 200;
    margin-left: 0.2rem;
`


export default CalendarHeader