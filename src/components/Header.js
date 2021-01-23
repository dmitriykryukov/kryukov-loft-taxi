import React, { useContext } from 'react'
import PropTypes from "prop-types"

import { Paper, AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../assets/images/small_Logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/HeaderStyles.js'
import AuthContext from '../AuthContext.js';


const useStyles = makeStyles(styles);

export default function Header( props ) {

  const classes = useStyles();

  const { logout, togglepage } = useContext(AuthContext)

  return (
      <Paper elevation={0} >
          <AppBar position="static" color='secondary'>
            <Toolbar className={classes.head}>
              <div className={classes.logo}>
                <img src={logo} alt='Loft-Taxi logo'/>
              </div>
              <Button
                color="inherit"
                className={classes.button}
                style= {{ color: '#FDBF5A' }}
                onClick={ () => togglepage('map') } >
                Карта
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={ () => togglepage('profile')} >
                Профиль
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={ () => { logout() } } >
                Выйти
              </Button>
            </Toolbar>
          </AppBar>
      </Paper>
  )
}

