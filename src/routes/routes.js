import React from 'react'
import {Switch, Route} from 'react-router'
import App from '@/components/app/App.jsx'

export const routes = (
  <Switch>
    <Route path="/" component={App} exact />
  </Switch>
)
