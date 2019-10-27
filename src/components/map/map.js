import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
// import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'

// const TOKEN=config.REACT_APP_TOKEN
const TOKEN = `pk.eyJ1IjoiYWtvZmYiLCJhIjoiY2syNTd3NHRvMTQzcTNtbXp4ZnAxNWs5YyJ9.ELtn_IIvz8p_0R6ujfH8Hw`

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: '100vh',
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map