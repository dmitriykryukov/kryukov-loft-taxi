import React, { useState, useEffect } from 'react'

import { makeStyles } from "@material-ui/core/styles"
import styles from '../assets/jss/MapPageStyles.js'
import { Container, Paper, FormControl, InputLabel, Select, MenuItem, Typography, CardMedia, Button } from '@material-ui/core'
import { getAddressesList, getRouteRequest } from '../actions'
import { connect } from 'react-redux'

import standart from '../assets/images/standart.jpg'
import business from '../assets/images/business.jpg'
import premium from '../assets/images/premium.jpg'

const useStyles = makeStyles(styles)

const PLANS = [
  { name: 'Стандарт', price: '150P', image: standart, id: 0 },
  { name: 'Бизнес', price: '250P', image: business, id: 1 },
  { name: 'Премиум', price: '350P', image: premium, id: 2 },
 ]

export function Map(props) {

  const classes = useStyles()
  const [addressFrom, setAddressFrom] = useState('')
  const [addressTo, setAddressTo] = useState('')

  const handleChangeFrom = event => {
    setAddressFrom(event.target.value);
  };

  const handleChangeTo = event=> {
    setAddressTo(event.target.value);
  };

  const buildRoute = () => {
    props.getRouteRequest(addressFrom, addressTo)
  };

  useEffect(() => {
    props.getAddressesList()
  }, [])


  return (
    <div className= {classes.wrapper}>
      <Container maxWidth='lg' className={classes.container}>
        <Paper className={classes.paper} elevation={1}>
          <Container className={classes.inputField}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Откуда</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addressFrom}
                onChange={handleChangeFrom}
              >
                {props.addresses.map((route, index) =>  <MenuItem key={route + index} value={route} >{route}</MenuItem>) }
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Куда</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addressTo}
                onChange={handleChangeTo}
              >
               {props.addresses.filter(item => item !== addressFrom).map((route, key) =>  <MenuItem key={route + key} value={route} >{route}</MenuItem>) }
              </Select>
            </FormControl>
          </Container>
        </Paper>
        <Paper className={classes.paperPlan}>
          <div className={classes.planItems}>
            {PLANS.map((plan) => 
              <div key={plan.id} className={classes.card}>
                  <Typography variant='body1'>{plan.name}</Typography>
                  <Typography variant='caption' className={classes.price}>Стоимость</Typography>
                  <Typography variant='h6'style={{ lineHeight: '0.8'}}>{plan.price}</Typography>
                  <CardMedia
                      className={classes.media}
                      image={plan.image}
                      title={plan.name}
                  />
              </div>
            )
          }
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.btnOrder}
            disableElevation
            onClick={buildRoute}
          >
            Заказать
          </Button>
        </Paper>
      </Container>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    addresses: state.map.addresses,
    route: state.map.route
  }
}

const mapDispatchToProps = {
    getRouteRequest,
    getAddressesList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

