import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Employees from '../pages/Employees'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/employees' component={Employees}/>
        </Switch>
    )
}

export default Routes
