import React from 'react'

import logo from '../assets/images/big_Logo.svg';

export default function Login(props) {
  const { onLogin } = props


  return (
    <div class='container'>
      <div class='leftSide'>
        <img src={logo} alt='Loft-Taxi logo'/>
      </div>
      <div class='rightSide'>
        <div class='loginCard'>
          <p class='title'>Войти</p>
          <button onClick={() => { onLogin()}}>Войти</button>
          <p class='newUser'>Новый пользователь?<snap class='newUser'><a href='#' >Регистрация</a></snap></p>
        </div>
      </div>
    </div>
  )
}


