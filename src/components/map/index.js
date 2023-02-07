import React from "react";
import Pointer from "../../assets/point.png";
import GoogleMapReact, { fitBounds } from "google-map-react";

import theme from "../../globalStyles/theme";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      textAlign: "center",
      boxShadow: "rgb(0 0 0 / 16%) 0px 0px 3px 0px",
    }}
  >
    <img src={Pointer} height={50} width={50} alt="pointer" />
    <p style={{ color: theme.colors.primary, fontSize: "large" }}>{text}</p>
  </div>
);

export default function MapComponent({ data }) {
  return (
    <div style={{ height: "60vh", width: "100%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBaWxdVR5OET04_8EMe15pWyA8nYbSYrCU" }}
        defaultCenter={{ lat: 24.9266176, lng: 67.0859264 }}
        defaultZoom={8}
      >
        {Array.isArray(data) &&
          data?.length > 0 &&
          data?.map(({ lat, lng, name }) => (
            <AnyReactComponent lat={lat} lng={lng} text={name} />
          ))}
      </GoogleMapReact>
    </div>
  );
}
