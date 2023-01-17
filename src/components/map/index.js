import React from "react";
import Pointer from "../../assets/point.png";
import GoogleMapReact from "google-map-react";
import { useQuery } from "react-query";
import apiService from "../../services/apiService";
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
  const defaultProps = {
    center: {
      lat: 30.404955,
      lng: 70.736504,
    },
    zoom: 20,
  };

  return (
    <div style={{ height: "60vh", width: "100%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBaWxdVR5OET04_8EMe15pWyA8nYbSYrCU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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
