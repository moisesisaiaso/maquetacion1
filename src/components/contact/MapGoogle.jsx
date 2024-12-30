import React, { useEffect } from "react";
import { GoogleApiWrapper } from "google-maps-react";
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const lat = -79.6583666761539;
const lng = 0.9905727543391132;
const MapGoogle = (props) => {
    useEffect(() => {
        const { AdvancedMarkerElement } = google.maps.importLibrary("marker");
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat, lng },
            zoom: 14,
        });
        new AdvancedMarkerElement({ position: { lat, lng }, map: map, title: "Ubicación" });
    }, []);
    return <div id="map" style={{ height: "450px", width: "100%" }}></div>;
};

export default GoogleApiWrapper({
    // así se accede a la variable de entorno si el proyecto es creado con CRA
    //   apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    // así se accede a la variable de entorno si el proyecto es creado con vite
    apiKey,
})(MapGoogle);
