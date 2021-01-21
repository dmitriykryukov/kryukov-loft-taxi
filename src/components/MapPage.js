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

  const ROUTES = ['Пулково (LED)', 'Эрмитаж', 'Кинотеатр Аврора', 'Мариинский театр' ]

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
                {ROUTES.map((route, key) =>  <MenuItem key={key} >{route}</MenuItem>) }
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
                {ROUTES.map((route, key) =>  <MenuItem key={key} >{route}</MenuItem>) }
              </Select>
            </FormControl>
          </Container>
        </Paper>
        <Paper className={classes.paperPlan}>
          <div className={classes.planItems}>
            <div className={classes.card}>
                <Typography variant='body1'>Стандарт</Typography>
                <Typography variant='caption' className={classes.price}>Стоимость</Typography>
                <Typography variant='h6'style={{ lineHeight: '0.8'}}>150P</Typography>
                <CardMedia
                    className={classes.media}
                    image={standart}
                    title="Standart"
                />
            </div>
            <div className={classes.card}>
                <Typography variant='body1'>Бизнес</Typography>
                <Typography variant='caption' className={classes.price}>Стоимость</Typography>
                <Typography variant='h6'style={{ lineHeight: '0.8'}}>250P</Typography>
                <CardMedia
                    className={classes.media}
                    image={business}
                    title="Standart"
                />
            </div>
            <div className={classes.card}>
                <Typography variant='body1'>Премиум</Typography>
                <Typography variant='caption' className={classes.price}>Стоимость</Typography>
                <Typography variant='h6'style={{ lineHeight: '0.8'}}>350P</Typography>
                <CardMedia
                    className={classes.media}
                    image={premium}
                    title="Standart"
                />
            </div>
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


