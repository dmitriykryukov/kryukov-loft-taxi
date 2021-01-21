import React  from 'react';

import './App.css';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './assets/jss/MuiThemeStyles'

import Main from './layouts/Main'

function App() {
  return (
    <ThemeProvider theme={ theme}>
      <div className="App">
      <Main/>
      </div>
    </ThemeProvider>
  );
}

export default App;
