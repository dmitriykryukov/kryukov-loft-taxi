import React, { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/ProfilePageStyles.js'
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function ProfilePage() {

  const classes = useStyles();

  return (
    <div style={{ pointerEvents: 'all' }}>
      <div className={classes.backGround}></div>
        <Paper elevation={1} className={classes.paperProfile}>
            <Typography variant='h4' align='center'>Профиль</Typography>
            <Typography variant='body1' align='center'>Введите платежные данные</Typography>
        </Paper>
    </div>
  )
}


