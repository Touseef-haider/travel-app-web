import React from "react";
import Pointer from "../../assets/point.png";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={Pointer} height={50} width={50} alt="pointer" />
  </div>
);

export default function MapComponent() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 20,
  };

  const mosques = [
    {
      lat: 30.404955,
      lng: 70.736504,
    },
    {
      lat: 32.959686,
      lng: 73.689919,
    },
    {
      lat: 26.05702,
      lng: 68.846275,
    },
    {
      lat: 24.907162,
      lng: 67.058723,
    },
    {
      lat: 30.894875,
      lng: 72.652359,
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBaWxdVR5OET04_8EMe15pWyA8nYbSYrCU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {mosques.map(({ lat, lng }) => (
          <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
        ))}
      </GoogleMapReact>
    </div>
  );
}
