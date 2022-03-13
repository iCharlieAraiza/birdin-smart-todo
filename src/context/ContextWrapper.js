import React, {useState, useReducer, useEffect} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedEventsReducer(state, {type, payload}){
    switch (type) {
        case 'push':
            return [...state, payload]
        case 'update':
            return state.map(evt => evt.id === payload.id ? payload : evt)
        case 'delete':
            return state.filter(evt => evt.id !== payload.id)
        default:
            throw new Error(`Unhandled action type: ${type}`)
    } 
}

function initEvents() {
    const storageEvents = localStorage.getItem('saveEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents
}

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [currentYear, setCurrentYear] = useState(dayjs().year())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [title, setTitle] = useState('')
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents)
    const [leftBarWidth, setLeftBarWidth] = useState(19*14)

    useEffect(() => {
        localStorage.setItem('saveEvents', JSON.stringify(savedEvents))
    }, [savedEvents])



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
                                        dispatchCalEvent,
                                        savedEvents,
                                        setSelectedEvent,
                                        selectedEvent,
                                        leftBarWidth,
                                        setLeftBarWidth,
                                        }}>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default ContextWrapper