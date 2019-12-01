import React, { Component } from "react";
import Destination from "../Destination";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import "./style.css";

mapboxgl.accessToken = `pk.eyJ1IjoiYWtvZmYiLCJhIjoiY2syNTd3NHRvMTQzcTNtbXp4ZnAxNWs5YyJ9.ELtn_IIvz8p_0R6ujfH8Hw`;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
    this.map = null;
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.273032, 59.798668],
      zoom: 8
    });
  }
  componentDidUpdate() {
    this.drawRoute(this.map, this.props.coordinates);
  }
  drawRoute = (map, coordinates) => {
    this.map.flyTo({
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
  render() {
    return (
      <div>
        <Destination />
        <div ref={el => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coordinates: state.route
  };
};
export default connect(mapStateToProps)(Map);
