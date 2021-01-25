import React, { Component } from 'react'

import './App.css'
import { ThemeProvider } from '@material-ui/core'
import { withAuth } from './AuthContext'
import { AuthProvider } from './AuthContext'


import { theme } from './assets/jss/MuiThemeStyles'

import Main from './layouts/Main'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme}>
        <AuthProvider>
            <Main/>
        </AuthProvider>
      </ThemeProvider>
    )
  }
}

export default withAuth(App)
