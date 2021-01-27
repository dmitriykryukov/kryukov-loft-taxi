import React, { Component } from 'react'
import PropTypes from "prop-types"
import { withAuth } from '../AuthContext'

import Header from '../components/Header'
import MapPage from '../components/MapPage'
import ProfilePage from '../components/ProfilePage'
import Login from './Login'

import { withStyles } from '@material-ui/styles'
import styles from '../assets/jss/MainPageStyles.js'


const PAGES = {
  map: <MapPage/>,
  profile: <ProfilePage/>,
  login: <Login/>
}

class Main extends Component {
   state = { currentPage: 'map'}
 

  togglePage = (page) => {
    this.setState( { currentPage: page} )
  }

  render() {
    const { classes } = this.props
    return (
      this.props.isLoggedIn
      ? <div className={ classes.wrapper}>
          <Header togglePage={(page) => this.togglePage(page)} />
          <div className={classes.main}>
          {PAGES[this.state.currentPage]}
          </div>
        </div>
    : PAGES['login']
  
    )
  }
}

Main.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default withStyles(styles)(withAuth(Main))


