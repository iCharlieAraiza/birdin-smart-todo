
import { Switch, Route } from "react-router-dom";
  
import Main from '../pages/Main/Main'
import Statistics from '../pages/Statistics/Statistics'


const AllRoutes = () => {
  return (
    <Switch>
        <Route path="/" exact >
            <Main />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
    </Switch>
  )
}

export default AllRoutes