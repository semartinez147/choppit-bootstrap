import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import React from 'react'
import Home from "./pages/Home";
import Select from "./pages/Select";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/select" component={Select}/>
                {/*<Route exact path="edit" component={Edit}/>*/}
                {/*<Route exact path="" component={}/>*/}
            </Switch>
        </BrowserRouter>
    </>
)