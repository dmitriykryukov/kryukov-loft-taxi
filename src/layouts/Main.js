import React, { useState } from 'react'

import AuthContext from '../AuthContext'

import Header from '../components/Header'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/MainPageStyles.js'
import MapPage from '../components/MapPage';
import ProfilePage from '../components/ProfilePage';
import LoginPage from './Login';

const useStyles = makeStyles(styles);

export default function Main() {

  const classes = useStyles();

  const [currentPage , setCurrentPage ] = useState('map');

  const [isLoggedIn , setLoggedIn ] = useState(false);


  const togglePage = (page) => {
    setCurrentPage(page)
  }

  const logIn = ( email, password) => {
      setLoggedIn(true)
      console.log(email + ' ' + password)
  }

  const logOut = () => {
      setLoggedIn(false)
  }

  const PAGES = {
    map: <MapPage/>,
    profile: <ProfilePage/>,
  }

  const mainPage = (
    <div className={ classes.wrapper}>
      <Header />
      <div className={classes.main}>
        {PAGES[currentPage]}
      </div>
    </div>
  )

  return (
    <AuthContext.Provider
    value = {{
      login: logIn,
      logout: logOut,
      togglepage: togglePage,
      isLoggedIn
    }}>
      { isLoggedIn ? mainPage : <LoginPage/> }
    </AuthContext.Provider>
  )
}


