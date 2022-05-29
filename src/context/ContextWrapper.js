import React, {useState, useReducer, useEffect} from 'react'
import GlobalContext from './GlobalContext'
import { getDayStatus, getPendingsNumberBySection } from '../utils/Report'
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
    const [dayStatus, setDayStatus] = useState([])
    const [updateCalendar, setUpdateCalendar] = useState(0)
    const [pendingCount, setPendingCount] = useState({})

    useEffect(() => {
        localStorage.setItem('saveEvents', JSON.stringify(savedEvents))
        updateDayStatus(daySelected)
        setPendingCount(getPendingsNumberBySection(savedEvents))
    }, [savedEvents])

    useEffect(() => {
        setDayStatus(initDateStatus)
        console.log('dayStatus', dayStatus)
    }, [])


    useEffect(() => {
        //setDayStatus(updateCalendar)
        setDayStatus(initDateStatus)
    }, [updateCalendar])


    function initDateStatus(){
        //const date = new Map()
        const date = new Set();
        const dateReport = new Map()
        savedEvents.forEach(element => {
            date.add(element.date)
        });
        
        for (const dateItem of date) {
            dateReport.set(dayjs(dateItem).format('DD-MM-YYYY'),  getDayStatus(savedEvents.filter(evt => dayjs(evt.date).format('DD-MM-YYYY') === dayjs(dateItem).format('DD-MM-YYYY'))))
        }
        return dateReport;
    }

    function updateDayStatus(date){
        //console.log('updateDayStatus', date.format('DD-MM-YYYY'))
        //console.log('dayStatus', dayStatus)
        const formatDate = date.format('DD-MM-YYYY')
        const items = savedEvents.filter(evt => dayjs(evt.date).format('DD-MM-YYYY') === formatDate)
        const newDayStatus = new Map(dayStatus)
        newDayStatus.set(formatDate, getDayStatus(items))
        //console.log('newDayStatus', newDayStatus)
        //newDayStatus[dayjs(dateItem).format('DD-MM-YYYY')] = getDayStatus(items);
        setDayStatus(newDayStatus)
    }



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
                                        dayStatus,
                                        setDayStatus,
                                        updateCalendar, 
                                        setUpdateCalendar,
                                        pendingCount,
                                        }}>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default ContextWrapper