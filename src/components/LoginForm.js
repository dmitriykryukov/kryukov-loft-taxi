import React, { useState } from 'react'

//  @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Link } from '@material-ui/core';

import styles from '../assets/jss/FormStyles.js'

const useStyles = makeStyles(styles);

export default function LoginForm( props ) {
  
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    // TODO validation fieltd and submit
    // if(email.length > 0 && password.length > 0){
    //   onLogin()
    // } else {
    //   alert('Заполните форму!!!');
    //   }
    
  }

  return (
    <div className={classes.container}>
        <Typography component="h1" variant="h4" className={classes.title}>
          Войти
        </Typography>
        <form className={classes.form} noValidate onSubmit={ () => props.switchLayout('main') }>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Имя пользователя"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder='mail@mail.ru'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder='***********'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            disableElevation
          >
            Войти
          </Button>
        </form>
        <Typography variant='body1' className={ classes.newUser }>
             Новый пользователь? 
              <Link onClick={ () => {props.toggleForm('register')} } style={{ textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>
              Зарегистрируйтесь
              </Link>
          </Typography>
    </div>
  )
}
