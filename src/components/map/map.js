import React, { Component } from "react";
// import MapGL from "react-map-gl";
// import nanoid from "nanoid/non-secure";
// import DeckGL, { GeoJsonLayer } from "deck.gl";
// import Geocoder from "react-map-gl-geocoder";
import Destination from "../Destination";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import "./style.css";
mapboxgl.accessToken = `pk.eyJ1IjoiYWtvZmYiLCJhIjoiY2syNTd3NHRvMTQzcTNtbXp4ZnAxNWs5YyJ9.ELtn_IIvz8p_0R6ujfH8Hw`;

class Map extends Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  map = '';

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    // this.map.on("move", () => {
    //   this.setState({
    //     lng: this.map.getCenter().lng.toFixed(4),
    //     lat: this.map.getCenter().lat.toFixed(4),
    //     zoom: this.map.getZoom().toFixed(2)
    //   });
    // });
  }

  componentDidUpdate() {
    drawRoute(this.map, this.props.coordinates)
  }

  render() {
    return (
      <div>
        <Destination />
        <div ref={el => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

export const drawRoute = (map, coordinates) => {
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

// export default Map;

const mapStateToProps = state => {
  return {
    coordinates: state.loginHandler.route
  };
};

export default connect(mapStateToProps)(Map);
