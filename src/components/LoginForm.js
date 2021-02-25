import React from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { authenticate } from '../actions'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

//  @material-ui/core components
import { Typography, TextField, Button } from '@material-ui/core';
import styles from '../assets/jss/FormStyles.js'
import { useForm } from "react-hook-form"

const useStyles = makeStyles(styles);

export function LoginForm(props) {

  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    props.authenticate(data.email, data.password)
  }

  return (
      <div className={classes.container}>
          <Typography component="h1" variant="h4" className={classes.title}>
            Войти
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              required
              fullWidth
              // id="email"
              label="Имя пользователя"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder='valid@email.com'
              inputRef={register({ required : true})}
              error={errors.email && errors.email.type === 'required'}
              helperText={errors.email && errors.email.type === 'required' && 'Поле Имя пользователя должно быть заполнено'}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              // id="password"
              autoComplete="current-password"
              placeholder='***********'
              inputRef={register({ required : true})}
              error={errors.password && errors.password.type === 'required'}
              helperText={errors.password && errors.password.type === 'required' && 'Поле Пароль должно быть заполнено'}
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
                <RouterLink
                    to='/registration'
                    style={{ textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>
                  Зарегистрируйтесь
                </RouterLink>
            </Typography>
      </div>
    )
}

LoginForm.propTypes = {
  toggleForm: PropTypes.func,
  logIn: PropTypes.func,
}


export default connect(
  null,
  { authenticate }
  )(LoginForm)