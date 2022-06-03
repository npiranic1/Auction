import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'pages/js/Home'
import Bid from 'pages/js/Bid'

function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home/single-product" component={Bid}/>
    </Switch>
  )
}

export default Routes