/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AuthLayout from "../../layouts/authLayout";
import HeaderCourosel from "../../components/headerCorousel/index";
import * as S from "./styled";
import { images } from "../placesNearMe";
import Pointer from "../../assets/point.png";
import Tag from "../../components/tag";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import apiService from "../../services/apiService";
import { useEffect } from "react";
import { useState } from "react";

const SinglePlace = () => {
  const [id, setId] = useState("");
  const location = useLocation(window.location.href);

  const { data } = useQuery(
    "getExp",
    () => apiService.getParticularExperience(id),
    {
      enabled: !!id,
    }
  );

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    console.log("-----", id);
    if (id) {
      setId(id);
    }
  }, []);

  console.log(data);

  return (
    <AuthLayout>
      <S.SinglePlace>
        <h1 className="primary mt-20">{data?.category}</h1>
        {data?.images?.length > 0 && (
          <HeaderCourosel
            data={
              Array.isArray(data?.images) && data?.images?.length > 0
                ? data.images
                : []
            }
          />
        )}
        <div className="section">
          <div className="detail">
            <h1 className="text-primary">{data?.category}</h1>
            <small>{data?.category}</small>
            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
          </div>
          <div className="availability">
            <h5>Available For</h5>
            <Tag title="Everyone" color="primary" />
            <h5>Accessible Via</h5>
            <Tag title="Walk" color="primary" />
            <Tag title="Bike" color="primary" />
            <Tag title="Car" color="primary" />
            <Tag title="Bus" color="primary" />
            <Tag title="Jeep" color="primary" />
          </div>
        </div>
        <h3 className="primary mt-20">Location</h3>
        <div
          className="d-flex align-items-center gap-5"
          style={{ marginBottom: "5px" }}
        >
          <img src={Pointer} width={30} height={30} />
          <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
        </div>
        <div className="d-flex align-items-center gap-5">
          <img src={Pointer} width={30} height={30} />
          <p>Information will be updated soon</p>
        </div>
        <h3 className="primary mt-20">Photos</h3>
        <p style={{ marginBottom: "10px" }}>
          Beautiful memories and breath taking scenes shared by tourists
        </p>
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(6,1fr)" }}
        >
          {data?.images?.map((i) => (
            <img height={150} width={200} src={i?.image} alt="img" />
          ))}
        </div>
        <h3 className="primary">Hotels Near By</h3>
        <div className="hotels">
          {data?.images?.map((item) => (
            <div className="hotel">
              <img src={item?.image} alt="hotel" />
              <h4>ABC Hotel</h4>
              <small>Cell: +923312924590</small>
              <h4>5 Start Hotel</h4>
              <small>xyz road karachi</small>
            </div>
          ))}
        </div>
      </S.SinglePlace>
    </AuthLayout>
  );
};

export default SinglePlace;
