import React, { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/ProfilePageStyles.js'
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import symbol from '../assets/images/symbol.svg'
import chip from '../assets/images/chip.svg'
import { connect } from 'react-redux'
import { addedCard } from '../actions'
import { DatePicker } from "@material-ui/pickers"
import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles(styles);

export function ProfilePage(props) {

  const { register, handleSubmit } = useForm()
  const classes = useStyles()
  const [cardNumber, setCardNumber] = useState('')
  const [isAddedPayment, setAddedPayment] = useState(false)
  const [selectedDate, handleChangeDate] = useState(new Date())

  const onSubmit = data => {
    props.addedCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc, props.token )
    setAddedPayment(true)
  }

  const handleChange = (event) => {
    setCardNumber(event.target.value)
  }

  const addCardInfo = (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='body1' align='center'>Введите платежные данные</Typography>
        <div className={classes.paymentInfo}>
          <div className={classes.formInfo}>
              <TextField
                label="Имя владельца"
                name='cardName'
                defaultValue={props.cardName}
                className={classes.textField}
                inputRef={register({ required: true })}
              />
              <TextField
                label="Номер карты"
                name='cardNumber'
                defaultValue={props.cardNumber}
                className={classes.textField}
                onChange={handleChange}
                inputRef={register({ required: true, pattern: /[0-9]{16}/ })}
              />
              <div className={classes.date} >
                  <DatePicker
                    views={["month", "year"]}
                    label="MM/YY"
                    format="MM/yy"
                    name='expiryDate'
                    minDate={new Date()}
                    maxDate={new Date("2030-06-01")}
                    value={selectedDate}
                    onChange={handleChangeDate}
                    inputRef={register({ required: true })}
                  />
                <TextField
                  label="CVC"
                  name='cvc'
                  defaultValue={props.cvc}
                  inputRef={register({ required: true })} />
              </div>
          </div>
          <div className={classes.cardInfo}>
            <Paper elevation={5} className={classes.card}>
              <div className={classes.topBottom}>
                <img src={symbol} alt='Loft-Taxi logo'/>
                <DatePicker
                    style= {{ width: '45px', color: '#484848'}}
                    views={["month", "year"]}
                    format="MM/yy"
                    value={selectedDate}
                    disabled
                    />
              </div>
              <div >
                <Typography variant='body1' style={{fontSize: '22px', lineHeight: 1.2}}>{cardNumber}</Typography>
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
      </form>
    </>
  )

  const switchOnMap = (
      <>
      <Typography variant='body1' align='center' style ={{ marginTop: '16px'}}>Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
      <NavLink
        to='/main/map'
        activeClassName = {classes.activeLink}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {setAddedPayment(false)}}
          className={classes.buttonSave}
          disableElevation
          >
          Перейти на карту
        </Button>
      </NavLink>

      </>
    )

  return (
    <div style={{ pointerEvents: 'all' }}>
      <div className={classes.backGround}></div>
        <Paper elevation={1} className={classes.paperProfile}>
            <Typography variant='h4' align='center' style= {{ fontWeight: 700}}>Профиль</Typography>
            {!isAddedPayment && addCardInfo}
            {isAddedPayment && switchOnMap}
        </Paper>
    </div>
  )
}


export default connect((state) => ({
   cardNumber: state.payment.cardNumber,
   expiryDate: state.payment.expiryDate,
   cardName: state.payment.cardName,
   cvc: state.payment.cvc,
   token: state.auth.authToken,
   }), { addedCard })(ProfilePage)



