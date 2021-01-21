import React, { useState } from 'react'

import Header from '../components/Header'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/MainPageStyles.js'
import MapPage from '../components/MapPage';
import ProfilePage from '../components/ProfilePage';
import LoginPage from './Login';

const useStyles = makeStyles(styles);

export default function Main() {

  const classes = useStyles();

  const [layout , setLayout] = useState('login');
  const [currentPage , setCurrentPage ] = useState('map');

  const switchLayout = (layout) => {
    setLayout(layout)
    setCurrentPage('map')
  }

  const tooglePage = (page) => {
    setCurrentPage(page)
  }

  const PAGES = {
    map: <MapPage/>,
    profile: <ProfilePage/>,
  }

  const mainPage = (
    <div className={ classes.wrapper}>
      <Header
          tooglePage = {(page) => tooglePage(page)}
          switchLayout = {(layout) => switchLayout(layout)}  />
      <div className={classes.main}>
        {PAGES[currentPage]}
      </div>
    </div>
  )

  const LAYOUTS = {
    main: mainPage,
    login: <LoginPage switchLayout = {(layout) => switchLayout(layout)}/>
  }
    
  return (
    <>
    { LAYOUTS[layout] }
    </>
  )
}


