import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserPlan } from '../pages/userplan'

export default function RouterView() {
    return(
        <Router>
            <Switch>
                <Route exact={true} path="/"> 
                    <UserPlan />
                </Route>
            </Switch>
        </Router>
    )
}