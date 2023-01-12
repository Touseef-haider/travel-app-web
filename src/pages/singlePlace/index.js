import React from "react";
import AuthLayout from "../../layouts/authLayout";
import HeaderCourosel from "../../components/headerCorousel/index";
import * as S from "./styled";
import { images } from "../placesNearMe";

const SinglePlace = () => {
  return (
    <AuthLayout>
      <S.SinglePlace>
        <HeaderCourosel data={[...images]} />
      </S.SinglePlace>
    </AuthLayout>
  );
};

export default SinglePlace;
