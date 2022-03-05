
import { Routes, Route } from "react-router-dom";
  
import Main from '../pages/Main/Main'
import Statistics from '../pages/Statistics/Statistics'


const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="teams" element={<h1>Hello</h1>} />
        </Routes>
  )
}

export default AllRoutes