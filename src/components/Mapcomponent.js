
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Mapcomponent = ({props}) => {
  return (
    <Map
    google={props.google}
    zoom={8}
   
    initialCenter={{ lat: 47.444, lng: -122.176}}
  />
  )
}

//export default Mapcomponent;

export default GoogleApiWrapper({
    apiKey:'AIzaSyDMYLjqz2Ox0-55bVHoizZusZV0Ckjfw80'
  })(Mapcomponent);