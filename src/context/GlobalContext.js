import React from "react";

const GlobalContext = React.createContext({
    isDarkMode: true,
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    title: "",
    setTitle: (title) => {},
    dispatchCalEvent: ({type, payload}) => {},
    savedEvents: [],
    setSelectedEvent: (event) => {},
    selectedEvent: null,
    leftBarWidth: 0,
    setLeftBarWidth: (width) => {}, 
    dayStatus: [],
    setDayStatus: (status) => {},
    updateCalendar: 0,
    setUpdateCalendar: (status) => {},
    pendingCount: {},
    globalUser: null,
    updateGlobalUser: () => {},
    dispatchUserEvent: () => {}
});

export default GlobalContext;