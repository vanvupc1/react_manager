import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Employees from '../pages/Employees'
import Customer from '../pages/Customer'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/employees' component={Employees}/>
            <Route path='/customer' component={Customer}/>
            <Route path='/product' component={Product}/>

        </Switch>
    )
}

export default Routes
