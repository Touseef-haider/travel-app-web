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

export default function MapComponent({ data, defaultValue }) {
  return (
    <div style={{ height: "60vh", width: "100%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBaWxdVR5OET04_8EMe15pWyA8nYbSYrCU" }}
        defaultCenter={
          defaultValue?.center || { lat: 24.9266176, lng: 67.0859264 }
        }
        zoom={
          fitBounds(
            {
              ne: defaultValue?.center,
              sw: defaultValue?.center,
            },
            {
              width: 640, // Map width in pixels
              height: 380, // Map height in pixels
            }
          ).zoom
        }
        options={{ zoomControl: { lat: 24.9266176, lng: 67.0859264 } }}
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
