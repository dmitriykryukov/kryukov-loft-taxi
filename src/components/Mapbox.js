import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

import { withStyles } from "@material-ui/core/styles"
import styles from '../assets/jss/MapboxStyles'

// const coordinates =[[30.316273,59.940578],[30.316589,59.940495],[30.322104,59.942886],[30.324488,59.941109],[30.328283,59.940693],[30.326199,59.935318],[30.360826,59.930965],[30.339552,59.90173],[30.341515,59.894806],[30.361811,59.855789],[30.380919,59.818024],[30.379545,59.81636],[30.370289,59.815208],[30.35289,59.81477],[30.3368,59.810448],[30.334572,59.810379],[30.323389,59.812008],[30.32362,59.806255],[30.324347,59.793816],[30.317898,59.790894],[30.280516,59.797192],[30.275146,59.800365],[30.274046,59.800365],[30.272182,59.800652]]

const drawRoute = (map, coordinates) => {
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });
 
  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  });
};
 

class Mapbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coordinates: this.props.route
    }
  }

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
    
    if(this.state.coordinates){
      this.map.on( 'load', () => {
        drawRoute(this.map, this.state.coordinates)
      })
    }
   
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

export default connect((state) => ({
  route: state.map.route
  }))(withStyles(styles)(Mapbox))