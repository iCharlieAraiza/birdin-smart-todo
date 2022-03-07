import React, {useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [currentYear, setCurrentYear] = useState(dayjs().year())
    return (
        <GlobalContext.Provider value={ {monthIndex, 
                                        setMonthIndex, 
                                        currentYear,
                                        setCurrentYear}}>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default ContextWrapper