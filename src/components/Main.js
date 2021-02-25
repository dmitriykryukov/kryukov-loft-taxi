import React, { Component } from 'react'
import PropTypes from "prop-types"
import Header from './Header'
import Map from './Map'
import Profile from './Profile'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from '../PrivateRoute'
import { withStyles } from '@material-ui/styles'
import styles from '../assets/jss/MainPageStyles.js'
import Mapbox from './Mapbox'
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    
    const { classes } = this.props
    return (
      <div className={ classes.wrapper}>
          <Header/>
          <Mapbox/>
          <div className={classes.main}>
            <Switch>
              <PrivateRoute
                exact
                path={['/main', '/main/map']}
                component={Map}
              />
              <PrivateRoute
                path='/main/profile'
                component={Profile}
              />
            </Switch>
          </div>
        </div>
    )
  }
}

Main.propTypes = {
  isLoggedIn: PropTypes.bool,
}

  export const MainWithConnect =  withStyles(styles)(connect((state) => ({ isLoggedIn: state.user.isLoggedIn }))(Main))
  


