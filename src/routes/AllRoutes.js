
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
          <Statistics key={window.Date.now()} />
        </Route>
        <Route path="/pending">
          <Task type="pending" key={window.Date.now() + 1}/>
        </Route>
        <Route path="/important">
          <Task type="important" key={window.Date.now() + 1}/>
        </Route>
        <Route path="/priority/:slug">
          <Task type="priority" key={window.Date.now() + 2} />
        </Route>
        <Route path="/label/:slug">
          <Task type="label" key={window.Date.now() + 1} />
        </Route>
    </Switch>
  )
}

export default AllRoutes