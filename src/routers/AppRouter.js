// NPM MODULES
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// COMPONENTS
import HomePage from '../components/HomePage/HomePage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="/" to="index.html" exact={true}/>
      <Route path="/index.html" component={HomePage}/>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter