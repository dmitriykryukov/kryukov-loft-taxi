import React, { Component } from 'react'
import PropTypes from "prop-types"

import logo from '../assets/images/big_Logo.svg'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { withAuth } from '../AuthContext'

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles"
import { Paper } from '@material-ui/core'

import styles from '../assets/jss/LoginPageStyles.js'

class Login extends Component {
  state = { onForm: 'login'}

  toggleForm = (form) => {
    this.setState( { onForm: form} )
  }

  render() {
    const { classes } = this.props

    const FORMS = {
      login: <LoginForm 
                toggleForm={(form) => this.toggleForm(form)}
              />,
      register: <RegisterForm 
                toggleForm={(form) => this.toggleForm(form)}
              />
    }
    
    return (
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <img src={logo} alt='Loft-Taxi logo'/>
        </div>
        <div className={classes.rightSide} >
            <Paper className={classes.card} elevation={5} >
            <section>{FORMS[this.state.onForm]}</section>
            </Paper>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  currentPage: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  togglePage: PropTypes.func,
}

export default withStyles(styles)(withAuth(Login))