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
});

export default GlobalContext;