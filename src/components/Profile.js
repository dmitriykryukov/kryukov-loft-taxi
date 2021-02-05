import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/ProfilePageStyles.js'
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import symbol from '../assets/images/symbol.svg'
import chip from '../assets/images/chip.svg'


const useStyles = makeStyles(styles);

export default function ProfilePage() {

  const classes = useStyles();

  return (
    <div style={{ pointerEvents: 'all' }}>
      <div className={classes.backGround}></div>
        <Paper elevation={1} className={classes.paperProfile}>
            <Typography variant='h4' align='center' style= {{ fontWeight: 700}}>Профиль</Typography>
            <Typography variant='body1' align='center'>Введите платежные данные</Typography>
            <div className={classes.paymentInfo}>
              <div className={classes.formInfo}>
                <form noValidate autoComplete="off">
                  <TextField label="Имя владельца" className={classes.textField} />
                  <TextField label="Номер карты" className={classes.textField} />
                  <div className={classes.date} >
                    <TextField label="MM/YY" />
                    <TextField label="CVC" />
                  </div>
                </form>
              </div>
              <div className={classes.cardInfo}>
                <Paper elevation={5} rounded className={classes.card}>
                  <div className={classes.topBottom}>
                    <img src={symbol} alt='Loft-Taxi logo'/>
                    <Typography variant='body1'>12/01</Typography>
                  </div>
                  <div >
                    <Typography variant='body' style={{fontSize: '22px', lineHeight: 1.2}}>1234 5678 4568 1234</Typography>
                  </div>
                  <div className={classes.topBottom}>
                    <img src={chip} alt='Chip'/>
                    <div className={classes.masterCard}></div>
                  </div>
                </Paper>

              </div>

            </div>
            <div className={classes.boxSave}> 
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttonSave}
                disableElevation
                type="submit"
              >
                Сохранить
              </Button>
            </div>
        </Paper>
    </div>
  )
}


