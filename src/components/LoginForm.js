import React, { useState } from 'react'

//  @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, FormControlLabel, Button, Grid, Link } from '@material-ui/core';

import styles from '../assets/jss/LoginFormStyles.js'

const useStyles = makeStyles(styles);

export default function LoginForm(props) {
  const { onLogin } = props
  const classes = useStyles();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function validateForm() {
  //   if(email.length > 0 && password.length > 0)
  //   onLogin()
  // }

  function handleSubmit(event) {
    event.preventDefault()
    if(email.length > 0 && password.length > 0){
      onLogin()
    } else {
      alert('Заполните форму!!!');
      }
    
  }

  return (
    <div className={classes.container}>
        <Typography component="h1" variant="h4" className={classes.title}>
          Войти
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
              <Link href="#" style={{ textDecoration: 'none', color: 'rgb(253, 191, 90)'}}>
              Зарегистрируйтесь
              </Link>
          </Typography>
    </div>
       
        // {/* <p className={classes.title}>Войти</p> */}
        // {/* <Form onSubmit={handleSubmit}>
        //   <Form.Group size="lg" controlId="email">
        //     <Form.Label>Email</Form.Label>
        //     <Form.Control
        //       autoFocus
        //       type='email'
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //       // Label='mail@mail.ru'
        //     />
        //   </Form.Group>
        //   <Form.Group size="lg" controlId="password">
        //     <Form.Label>Пароль</Form.Label>
        //     <Form.Control
        //       type="password"
        //       value={password}
        //       onChange={(e) => setPassword(e.target.value)}
        //     />
        //   </Form.Group>
        //   <Button/>
        //   <Button block size="lg" type="submit" disabled={!validateForm()}>
        //     Войти
        //   </Button>
        // </Form> */}
        // {/* <p className='newUser'>Новый пользователь?<snap class='newUser'>
        //   <a href='#' >Регистрация</a></snap>
        //   </p> */}
  )
}
