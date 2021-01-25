import React from 'react'
import PropTypes from 'prop-types'

//  @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Link } from '@material-ui/core';

import styles from '../assets/jss/FormStyles.js'

const useStyles = makeStyles(styles);

export default function RegisterForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Typography component="h1" variant="h4" className={classes.title}>
        Регистрация
        </Typography>
        <form className={classes.form} noValidate onSubmit={() => {console.log('TODO Registration')} }>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoFocus
            onChange={() => {}}
          />
          <div className={ classes.user} >
          <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="Имя"
            id="name"
            onChange={() => {}}
          />
          <div style ={{minWidth: '8px'}}></div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Фамилия"
            id="lastName"
            onChange={() => {}}
          />

          </div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            onChange={() => {}}
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
            Зарегистрироваться
          </Button>
        </form>
        <Typography variant='body1' className={ classes.newUser }>
            Уже зарегистрирован? 
            <Link  onClick={ () => props.toggleForm('login')  } style={{ textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>
            Войти
            </Link>
        </Typography>
    </div>
  )
}


RegisterForm.propTypes = {
  toggleForm: PropTypes.func
}
