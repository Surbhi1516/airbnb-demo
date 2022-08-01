import React from 'react'
import Map from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';
import { Marker, Popup } from 'react-map-gl'

const Maps = ({ searchResult }) => {

  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResult.map(item => ({
    longitude: item.long,
    latitude: item.lat,
  }
  ))
  // console.log(coordinates)

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle='mapbox://styles/surbhi1516/cl6b13j2t000014oevo2cju2i'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    // onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {searchResult.map(item => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetRight={-10}
          ><p role='img' onClick={() => setSelectedLocation(result)} className=' cursor-pointer text-2xl animate-bounce'>📍</p></Marker>

          {selectedLocation.long === item.long ? (<Popup onClose={() => setSelectedLocation({})} latitude={item.lat} longitude={item.long} closeOnClick={true}>{item.title}</Popup>) : (false)}
        </div>
      ))}
    </Map>
  )
}

export default Maps;