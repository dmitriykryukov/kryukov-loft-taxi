import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Paper, AppBar, Toolbar, Button } from '@material-ui/core'
import logo from '../assets/images/small_Logo.svg'
import { withStyles } from "@material-ui/core/styles"
import styles from '../assets/jss/HeaderStyles.js'
// import AuthContext from '../AuthContext.js'

import { withAuth } from '../AuthContext'

export class Header extends Component {

  render() {
    const { classes } = this.props
    return (
      <Paper elevation={0} >
          <AppBar position="static" color='secondary'>
            <Toolbar className={classes.head}>
              <div className={classes.logo}>
                <img src={logo} alt='Loft-Taxi logo'/>
              </div>
              <Button
                color="inherit"
                className={classes.button}
                // style= {{ color: '#FDBF5A' }}
                onClick={ () => this.props.togglePage('map') } >
                Карта
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={ () => this.props.togglePage('profile')} >
                Профиль
              </Button>
              <Button
                color="inherit"
                className={classes.button}
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
  currentPage: PropTypes.string,
  logOut: PropTypes.func,
  togglePage: PropTypes.func,
}

export default withStyles(styles)(withAuth(Header))

