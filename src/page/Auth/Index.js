import React, {Fragment, useState} from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function Auth() {
  
  const {url, path} = useRouteMatch()
  console.log(path);
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/auth/login">login</Link>
        </li>
        <li><Link to="/auth/register">Register</Link></li>
      </ul>
      <Switch>
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/register`} >
          <Register/>
        </Route>
      </Switch>
    </Fragment>
  )
}

export default Auth
