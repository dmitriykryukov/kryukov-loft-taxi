import React, { useState } from 'react';

import './App.css';

import Login from './layouts/Login'
import Map from './layouts/Map'

function App() {

const [isAuthorized, setAuthorized] = useState(false)

const toggleOnLogin = () => {
  setAuthorized(true)
}

  return (
    <div className="App">
      {!isAuthorized && <Login onLogin={toggleOnLogin}/>}
      {isAuthorized && ( <Map/> )}
    </div>
  );
}

export default App;
