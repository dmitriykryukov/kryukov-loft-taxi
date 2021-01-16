import React from 'react'

import logo from '../assets/images/big_Logo.svg';
import LoginForm from '../components/LoginForm';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';

import styles from '../assets/jss/LoginPageStyles.js'

const useStyles = makeStyles(styles);

export default function Login(props) {
  const { onLogin } = props

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <img src={logo} alt='Loft-Taxi logo'/>
      </div>
      <div className={classes.rightSide} >
          <Paper className={classes.card} elevation={5} >
            <LoginForm onLogin={onLogin}/>
          </Paper>
      </div>
    </div>
  )
}


