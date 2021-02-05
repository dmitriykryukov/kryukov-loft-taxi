import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { authenticate } from '../actions'

//  @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Link } from '@material-ui/core';
import styles from '../assets/jss/FormStyles.js'


class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.authenticate = (event) => {
      event.preventDefault()
      const { email, password } = event.target
      this.props.authenticate(email.value, password.value)
    }
  }
  

  render() {
  const { classes, toggleForm } = this.props
    return (
      <div className={classes.container}>
          <Typography component="h1" variant="h4" className={classes.title}>
            Войти
          </Typography>
          <form className={classes.form} noValidate onSubmit={ this.authenticate}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Имя пользователя"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder='valid@email.com'
              // error
              // helperText='Поле Имя пользователя должно быть заполнено'
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
              // helperText='Поле Пароль должно быть заполнено'
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
                <Link onClick={ () => {toggleForm('register')} }
                      style={{ textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>
                Зарегистрируйтесь
                </Link>
            </Typography>
      </div>
    )
  }
}

LoginForm.propTypes = {
  toggleForm: PropTypes.func,
  logIn: PropTypes.func,
}

export default withStyles(styles)((connect(
  null,
  { authenticate }
))(LoginForm))