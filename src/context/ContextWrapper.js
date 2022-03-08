import React, {useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [currentYear, setCurrentYear] = useState(dayjs().year())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [title, setTitle] = useState('')

    return (
        <GlobalContext.Provider value={ {monthIndex, 
                                        setMonthIndex, 
                                        currentYear,
                                        setCurrentYear,
                                        smallCalendarMonth,
                                        setSmallCalendarMonth,
                                        daySelected,
                                        setDaySelected,
                                        title,
                                        setTitle,
                                        }}>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default ContextWrapper