import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from "./MapMarker";

const Map = withScriptjs(withGoogleMap((props) =>{

  const coordinates = {
          lat: 13.746877,
          lng: 100.533067
      };

  return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={coordinates}
        disableDefaultUI
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false
        }}
        >
        <MapMarker location={coordinates}/>
      </GoogleMap>
    );
  }
));

export default Map;
