
import { Switch, Route } from "react-router-dom";
  
import Main from '../pages/Main/Main'
import Statistics from '../pages/Statistics/Statistics'
import Task from '../pages/Task/'

const AllRoutes = () => {
  return (
    <Switch>
        <Route path="/" exact >
            <Main />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/pending">
          <Task type="pending"/>
        </Route>
        <Route path="/label/:slug">
          <Task type="label" />
        </Route>
    </Switch>
  )
}

export default AllRoutes