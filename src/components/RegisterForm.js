import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onRegister } from '../actions'

//  @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form"
import styles from '../assets/jss/FormStyles.js'

const useStyles = makeStyles(styles);

export function RegisterForm(props) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    props.onRegister(data.email, data.password, data.name, data.surname)
    // props.isRegistered && <Redirect to='/login'/>
    props.isRegistered ? (
      <Redirect to='/login'/>
    ) : (
      <Redirect to='/'/>
    )
  }

  return (
    <div className={classes.container}>
        <Typography component="h1" variant="h4" className={classes.title}>
        Регистрация
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoFocus
            inputRef={register({ required : true})}
            error={errors.email && errors.email.type === 'required'}
            helperText={errors.email && errors.email.type === 'required' && 'Поле email должно быть заполнено'}
          />
          <div className={ classes.user} >
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Имя"
            inputRef={register({ required : true})}
            error={errors.name && errors.name.type === 'required'}
            helperText={errors.name && errors.name.type === 'required' && 'Поле Имя пользователя должно быть заполнено'}
          />
          <div style ={{minWidth: '8px'}}></div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="surname"
            label="Фамилия"
            inputRef={register()}

          />

          </div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            inputRef={register({ required : true})}

          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            disableElevation
            data-testid='onRegister'
          >
            Зарегистрироваться
          </Button>
        </form>
        <Typography variant='body1' className={ classes.newUser }>
            Уже зарегистрирован? 
            <RouterLink
              to='/login'
              style={{ textDecoration: 'none', color: 'rgb(253, 191, 90)'}}
            >
              Войти
            </RouterLink>
        </Typography>
    </div>
  )
}

RegisterForm.propTypes = {
  toggleForm: PropTypes.func
}

export default connect((state) => ({
  isRegistered: state.user.isRegistered
  }), { onRegister })(RegisterForm)

