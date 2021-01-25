import React, { Component } from 'react'
import PropTypes from "prop-types"
import { withAuth } from '../AuthContext'

import Header from '../components/Header'
import MapPage from '../components/MapPage'
import ProfilePage from '../components/ProfilePage'
import Login from './Login'

import { withStyles } from '@material-ui/styles'
import styles from '../assets/jss/MainPageStyles.js'


 class Main extends Component {

  render() {

      const { classes } = this.props

      const PAGES = {
        map: <MapPage/>,
        profile: <ProfilePage/>,
        login: <Login/>
      }

    return (
      this.props.isLoggedIn
      ? <div className={ classes.wrapper}>
          <Header />
          <div className={classes.main}>
          {PAGES[this.props.currentPage]}
          </div>
        </div>
    : PAGES['login']
  
    )
  }
}

Main.propTypes = {
  currentPage: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  togglePage: PropTypes.func,
}

export default withStyles(styles)(withAuth(Main))

