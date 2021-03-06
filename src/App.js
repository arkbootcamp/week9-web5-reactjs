import React from 'react'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import About from './page/About'
import Detail from './page/Detail'
import Home from './page/Home'
import Form from './page/Form'
import Auth from './page/Auth/Index'

function App() {
  const isLogin = true
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" render={(props)=> isLogin ? <About {...props} />: <Redirect to="/"/>} />
      <Route path="/detail/:id" component={Detail}/>
        <Route path="/form" exact component={Form} />
      <Route path="/auth" component={Auth} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
