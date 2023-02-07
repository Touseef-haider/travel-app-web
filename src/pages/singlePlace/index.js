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

  const { data } = useQuery("getExp", () => apiService.getParticularPlace(id), {
    enabled: !!id,
  });

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    if (id) {
      setId(id);
    }
  }, []);

  return (
    <AuthLayout>
      <S.SinglePlace>
        <h1>{data?.name}</h1>
        <small className="primary mt-20">{data?.category?.name}</small>
        {data?.images?.length > 0 && (
          <HeaderCourosel
            data={
              Array.isArray(data?.images) && data?.images?.length > 0
                ? data?.images?.map((i) => ({ image: i }))
                : []
            }
          />
        )}
        <div className="section">
          <div className="detail">
            <small>{data?.category?.name}</small>
            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
          </div>
          <div>
            <div className="availability">
              <h5>Available For</h5>
              {data?.accessibilities
                ?.filter((i) => i?.type === "individual")
                ?.map((a) => (
                  <Tag title={a?.via} color="primary" />
                ))}
            </div>
            <div className="availability">
              <h5>Accessible Via</h5>
              {data?.accessibilities
                ?.filter((i) => i?.type === "vehicle")
                ?.map((a) => (
                  <Tag title={a?.via} color="primary" />
                ))}
            </div>
          </div>
        </div>
        <h3 className="primary mt-20">Location</h3>
        <div
          className="d-flex align-items-center gap-5"
          style={{ marginBottom: "5px" }}
        >
          <img src={Pointer} width={30} height={30} />
          <p>{data?.location}</p>
        </div>
        <div className="d-flex align-items-center gap-5">
          <img src={Pointer} width={30} height={30} />
          <p>{data?.contact}</p>
        </div>

        <h3 className="primary">Hotels Near By</h3>
        <div className="hotels">
          {data?.hotels?.map((h) => (
            <div className="hotel">
              {h?.images?.length > 0 && (
                <img
                  src={h?.images?.[0]?.url}
                  width="50px"
                  height="50px"
                  alt="hotel"
                />
              )}
              <h4>{h?.name}</h4>
              <h4>{h?.stars} Stars</h4>
              <small
                dangerouslySetInnerHTML={{ __html: h?.description }}
              ></small>
              <p>{h?.location}</p>
            </div>
          ))}
        </div>
      </S.SinglePlace>
    </AuthLayout>
  );
};

export default SinglePlace;
