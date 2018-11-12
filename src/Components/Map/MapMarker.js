import React from "react";
import { Marker } from "react-google-maps";
import Icon from "./icon-map-marker.svg";

const MapMarker = (props) => {
    return (
        <Marker
          position={props.location}
          icon={Icon}
        >
        </Marker>
    );
};

export default MapMarker;
