import React, { Component, createRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

import { withStyles } from "@material-ui/core/styles"
import styles from '../assets/jss/MapboxStyles'

const drawRoute = (map, coordinates) => {
  if (map.getLayer('route')) {
      map.removeLayer('route');
      map.removeSource('route');
  }
  map.flyTo({
      center: coordinates[0],
      zoom: 15
  })
  map.addLayer({
      id: 'route',
      type: 'line',
      source: {
          type: 'geojson',
          data: {
              type: 'Feature',
              properties: {},
              geometry: {
                  type: 'LineString',
                  coordinates
              }
          }
      },
      layout: {
          'line-join': 'round',
          'line-cap': 'round'
      },
      paint: {
          'line-color': '#ffc617',
          'line-width': 8
      },
  })
}
 
class Mapbox extends Component {

  map = null
  mapContainer = createRef()
  componentDidMount () {
    mapboxgl.accessToken ='pk.eyJ1IjoiZG1pdHJpeWtzIiwiYSI6ImNra2NudzFvaTExbjAydnIxM2xyd3Z4azgifQ.mnIXb6-L5PQmI3v91TxLRg'

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10
    })
  }

  componentDidUpdate () {
    drawRoute(this.map, this.props.route)
  }

  componentWillUnmount () {
    this.map.remove()
  }

  render() {
  const { classes, } = this.props
    return (
        <div data-testid='map' className={classes.map} ref={this.mapContainer}/>
    )
  }
}

export default connect((state) => ({
  route: state.map.route
  }))(withStyles(styles)(Mapbox))