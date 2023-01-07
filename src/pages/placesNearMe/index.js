import React from "react";
import MapComponent from "../../components/map";
import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";

const PlacesNearMe = () => {
  return (
    <AuthLayout>
      <S.PlacesNearMe>
        <h1>Places</h1>
        <MapComponent />
      </S.PlacesNearMe>
    </AuthLayout>
  );
};

export default PlacesNearMe;
