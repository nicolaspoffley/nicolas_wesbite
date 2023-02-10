import React from 'react'
import ReactStreetview from "react-streetview";

const StreetView = props => {

    const streetViewPanoramaOptions = {
        position: { lat: props.lat, lng: props.lng },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        addressControl: false,
        showRoadLabels: false,
        zoomControl: false
    };

    return (
        <ReactStreetview
            apiKey="AIzaSyAki07EJsAjjo2AiAY0d9F9pOr2Nsucxvk"
            streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
    )
}

export default StreetView