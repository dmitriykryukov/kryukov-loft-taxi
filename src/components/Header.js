import React from 'react'

import { Paper, AppBar, Toolbar, Button, Typography, Menu, MenuItem } from '@material-ui/core';
import logo from '../assets/images/small_Logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/HeaderStyles.js'

const useStyles = makeStyles(styles);

export default function Header(props) {
  const { togglePage } = props

  const classes = useStyles();

  return (
    <div>
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
                onClick={ () => { togglePage() } } >
                Карта
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={ () => { togglePage() } } >
                Профиль
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={ () => { } } >
                Выйти
              </Button>
            </Toolbar>
          </AppBar>
      </Paper>
      
    </div>
  )
}

