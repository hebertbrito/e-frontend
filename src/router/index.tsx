import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserPlan, User, ListUserPlanView } from '../pages'

export default function RouterView() {
    return(
        <Router>
            <Switch>
                <Route exact={true} path="/"> 
                    <UserPlan />
                </Route>
                <Route path="/user"> 
                    <User />
                </Route>
                <Route path="/listuserplan"> 
                    <ListUserPlanView />
                </Route>
            </Switch>
        </Router>
    )
}