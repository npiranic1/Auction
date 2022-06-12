import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'pages/js/Home'
import Bid from 'pages/js/Bid'
import Login from 'pages/js/Login'
import Registration from 'pages/js/Registration'

function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home/single-product/:id" component={Bid}/>
        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
    </Switch>
  )
}

export default Routes