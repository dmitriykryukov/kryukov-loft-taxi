import React from 'react'
import './App.css';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './assets/jss/MuiThemeStyles'


import Login from './layouts/LoginPage'
import Map from './layouts/MapPage'

function App() {
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
