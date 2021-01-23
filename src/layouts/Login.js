import React, { useState } from 'react'
import PropTypes from 'prop-types'

import logo from '../assets/images/big_Logo.svg';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import AuthContext from '../AuthContext.js';


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';

import styles from '../assets/jss/LoginPageStyles.js'

const useStyles = makeStyles(styles);

export default function Login(props) {

  const [onForm, setOnForm] = useState('login');

  
  const FORMS = {
    login: <LoginForm 
              toggleForm={(form) => toggleForm(form)}
            />,
    register: <RegisterForm 
              toggleForm={(form) => toggleForm(form)}
            />
  }
  const toggleForm = (form) => {
    setOnForm(form)
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <img src={logo} alt='Loft-Taxi logo'/>
      </div>
      <div className={classes.rightSide} >
          <Paper className={classes.card} elevation={5} >
          <section>{FORMS[onForm]}</section>
          </Paper>
      </div>
    </div>
  )
}


