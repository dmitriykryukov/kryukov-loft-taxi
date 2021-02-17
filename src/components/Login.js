import React, { Component } from 'react'
import PropTypes from "prop-types"
import logo from '../assets/images/big_Logo.svg'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainWithConnect } from './Main'

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles"
import { Paper } from '@material-ui/core'

import styles from '../assets/jss/LoginPageStyles.js'

class Login extends Component {

  render() {
    const { classes } = this.props
    return (
      <>
        { this.props.isLoggedIn
          ? (<Redirect to='/main/map' component={MainWithConnect}/>)
        :
        ( <div className={classes.container}>
          <div className={classes.leftSide}>
            <img src={logo} alt='Loft-Taxi logo'/>
          </div>
          <div className={classes.rightSide} >
              <Paper className={classes.card} elevation={5} >
              <section>
              <Switch>
                  <Route exact path={['/', '/login']} component={LoginForm} />
                  <Route path='/registration'component={RegisterForm}/>
              </Switch>
              </section>
              </Paper>
          </div>
        </div> )
      }
     </>
    )
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  togglePage: PropTypes.func,
}


  export const LoginWithConnect = withStyles(styles)(connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(Login))