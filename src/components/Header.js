import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, AppBar, Toolbar, Button } from '@material-ui/core'
import logo from '../assets/images/small_Logo.svg'
import { withStyles } from '@material-ui/core/styles'
import styles from '../assets/jss/HeaderStyles.js'
import { connect } from 'react-redux'
import { logOut } from '../actions'
import { NavLink } from 'react-router-dom'

export class Header extends Component {

  render() {
    const { classes, match } = this.props
    return (
      <Paper elevation={0} >
          <AppBar position='static' color='secondary'>
            <Toolbar className={classes.head}>
              <div className={classes.logo}>
                <img src={logo} alt='Loft-Taxi logo'/>
              </div>
              <NavLink
                to={`${match.url}/map`}
                activeClassName = {classes.activeLink}
              >
                <Button
                  color='inherit'>
                  Карта
                </Button>
              </NavLink>
              <NavLink
                to={`${match.url}/profile`}
                activeClassName = {classes.activeLink}
              >
                <Button
                  color='inherit'>
                  Профиль
                </Button>
              </NavLink>
              <Button
                color='inherit'
                onClick={ () => { this.props.logOut() } } >
                Выйти
              </Button>
            </Toolbar>
          </AppBar>
      </Paper>
    ) 
  }
}


Header.propTypes = {
  logOut: PropTypes.func,
  togglePage: PropTypes.func,
}

export default withStyles(styles)(((connect(
  null,
  { logOut }
)))(Header))

