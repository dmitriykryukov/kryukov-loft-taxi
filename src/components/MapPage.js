import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/MapPageStyles.js'
import { Container, Paper, FormControl, InputLabel, Select, MenuItem, Typography, CardMedia, Button } from '@material-ui/core';

import standart from '../assets/images/standart.jpg'
import business from '../assets/images/business.jpg'
import premium from '../assets/images/premium.jpg'

const useStyles = makeStyles(styles);

export default function MapPage() {

  const classes = useStyles();

  const [addressFrom, setAddressFrom] = React.useState('');
  const [addressTo, setAddressTo] = React.useState('');

  const handleChangeFrom = (event) => {
    setAddressFrom(event.target.value);
  };
  const handleChangeTo = (event) => {
    setAddressTo(event.target.value);
  };

  const ROUTES = [
    { name: 'Пулково (LED)', id: 0 },
    { name: 'Эрмитаж', id: 1 },
    { name: 'Кинотеатр Аврора', id: 2 },
    { name: 'Мариинский театр', id: 3}
   ]

  const PLANS = [
    { name: 'Стандарт', price: '150P', image: standart, id: 0 },
    { name: 'Бизнес', price: '250P', image: business, id: 1 },
    { name: 'Премиум', price: '350P', image: premium, id: 2 },
   ]

  return (
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
                {ROUTES.map((route) =>  <MenuItem key={route.id} >{route.name}</MenuItem>) }
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
               {ROUTES.map((route) =>  <MenuItem key={route.id} >{route.name}</MenuItem>) }
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
          >
            Войти
          </Button>
        </Paper>
      </Container>
  )
}


