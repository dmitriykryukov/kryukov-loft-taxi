import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginWithConnect } from './components/Login'
import { PrivateRoute } from './PrivateRoute'
import { MainWithConnect } from './components/Main'
import { theme } from './assets/jss/MuiThemeStyles'

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme}>
        <div className='wrapper'>
          <Switch>
            <PrivateRoute  path="/main" component={MainWithConnect} />
            <Route path="/login" component={LoginWithConnect} />
            <Redirect to='/main/map'/>
          </Switch>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App)

