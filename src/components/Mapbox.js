import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

import { withStyles } from "@material-ui/core/styles"
import styles from '../assets/jss/MapboxStyles'


class Mapbox extends Component {
  map = null
  mapContainer = React.createRef()

  componentDidMount () {
    mapboxgl.accessToken ='pk.eyJ1IjoiZG1pdHJpeWtzIiwiYSI6ImNra2NudzFvaTExbjAydnIxM2xyd3Z4azgifQ.mnIXb6-L5PQmI3v91TxLRg'

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10
    }) 
  }

  componentWillUnmount () {
    this.map.remove()
  }


  render() {
  const { classes } = this.props
    return (
        <div data-testid='map' className={classes.map} ref={this.mapContainer}/>
    )
  }
}

export default withStyles(styles)(Mapbox)