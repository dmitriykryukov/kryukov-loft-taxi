import React, { Component } from 'react'
import PropTypes from "prop-types"
import Header from './Header'
import Map from './Map'
import Profile from './Profile'
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../assets/jss/MainPageStyles.js'

import { connect } from 'react-redux'

class Main extends Component {
  render() {
    
    const { classes, match } = this.props
    return (
      <div className={ classes.wrapper}>
          <Header match={match}/>
          <div className={classes.main}>
            <Route
              path={`${match.path}/map`}
              component={Map}
            />
            <Route
              path={`${match.path}/profile`}
              component={Profile}
            />
          </div>
        </div>
    )
  }
}

Main.propTypes = {
  isLoggedIn: PropTypes.bool,
}

  export const MainWithConnect =  withStyles(styles)(connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(Main))
  


