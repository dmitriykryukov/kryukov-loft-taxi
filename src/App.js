import React, { useState } from 'react';

import './App.css';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './assets/jss/MuiThemeStyles'


import LoginPage from './layouts/LoginPage'
import MainPage from './layouts/MainPage'

function App() {

const [isAuthorized, setAuthorized] = useState(false)

const toggleOnLogin = () => {
  setAuthorized(true)
  console.log('toggleOnLogin')

}

const logOut = () => {
  setAuthorized(false)
  console.log('exit')
}

  return (
    <ThemeProvider theme={ theme}>
      <div className="App">
        {!isAuthorized && <LoginPage onLogin={toggleOnLogin}/>}
        {isAuthorized &&  <MainPage /> }
      </div>
    </ThemeProvider>
  );
}

export default App;
