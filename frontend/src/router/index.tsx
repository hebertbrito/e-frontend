import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Teste = ()=>{
    return(
        <div style={{height: "100%"}}>
            <p>view ola</p>
        </div>
    )
}

export default function RouterView() {
    return(
        <Router>
            <Switch>
                <Route exact={true} path="/"> 
                    <Teste />
                </Route>
            </Switch>
        </Router>
    )
}