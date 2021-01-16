import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './assets/jss/MuiThemeStyles'


import Login from './layouts/LoginPage'
import Map from './layouts/MapPage'

import Login from './layouts/Login'
import Map from './layouts/Map'

function App() {

const [isAuthorized, setAuthorized] = useState(false)

const toggleOnLogin = () => {
  setAuthorized(true)
}

  return (
    <ThemeProvider theme={ theme}>
      <div className="App">
        {!isAuthorized && <Login onLogin={toggleOnLogin}/>}
        {isAuthorized && ( <Map/> )}
      </div>
    </ThemeProvider>
  );
}

export default App;
