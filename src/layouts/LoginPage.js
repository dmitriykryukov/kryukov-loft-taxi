import React, { useState } from 'react'

import logo from '../assets/images/big_Logo.svg';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';

import styles from '../assets/jss/LoginPageStyles.js'

const useStyles = makeStyles(styles);

export default function Login(props) {
  const { onLogin } = props

  const [isLogin, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin(!isLogin)
  }


  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <img src={logo} alt='Loft-Taxi logo'/>
      </div>
      <div className={classes.rightSide} >
          <Paper className={classes.card} elevation={5} >
            { isLogin && 
            <LoginForm onLogin={onLogin} toggleForm={toggleForm}/>
             }
            { !isLogin && 
            <RegisterForm onLogin={onLogin} toggleForm={toggleForm}/>
             }
          </Paper>
      </div>
    </div>
  )
}


