import React from "react";

const GlobalContext = React.createContext({
    isDarkMode: true,
    monthIndex: 0,
    setMonthIndex: (index) => {},
});

export default GlobalContext;