import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { Component } from "react";
import MapGL from "react-map-gl";
import nanoid from "nanoid/non-secure";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import Destination from "../Destination";
import { connect } from "react-redux";
const token = `pk.eyJ1IjoiYWtvZmYiLCJhIjoiY2syNTd3NHRvMTQzcTNtbXp4ZnAxNWs5YyJ9.ELtn_IIvz8p_0R6ujfH8Hw`;
// const token = process.env.REACT_APP_TOKEN

export class Map extends Component {
  state = {
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 1
    },
    id: nanoid(),
    searchResultLayer: null
  };

  mapRef = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  };

  drawRoute = (map, coordinates) => {
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
  

  componentDidUpdate() {
    this.drawRoute(this.mapRef, this.props.coordinates)
  }

  render() {
    const { id, viewport, searchResultLayer } = this.state;

    return (
      <div style={{ height: "100vh" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bolder"
          }}
        >
          Use the search bar to find a location or click <a href='/'>here</a> to
          find your location
          <Destination />
        </div>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          width='100%'
          height='90%'
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={token}
        >
          <Geocoder
            key={id}
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={token}
            position='top-left'
          />
        </MapGL>
        <DeckGL {...viewport} layers={[searchResultLayer]} />
      </div>
    );
  }
}

// export default Map;

const mapStateToProps = state => {
  return {
    coordinates: state.loginHandler.route
  };
};


export default connect(mapStateToProps)(Map);