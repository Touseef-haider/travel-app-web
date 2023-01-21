import React from "react";
import Corousel from "../../components/corousel";
import ExperienceCard from "../../components/ExperienceCard";
import MapComponent from "../../components/map";
import Select from "../../components/select";
import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";

import { useQuery } from "react-query";
import apiService from "../../services/apiService";
import { useState } from "react";
import Button from "../../components/button";
import { useEffect } from "react";

const PlacesNearMe = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [defaultValue, setDefaultValue] = useState({
    center: {
      lat: null,
      lng: null,
    },
    bounds: {
      lat: null,
      lng: null,
    },
    zoom: 20,
  });
  console.log(defaultValue);
  useEffect(() => {
    navigator.permissions
      .query({
        name: "geolocation",
      })
      .then((result) => {
        console.log(result);
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition((pos) => {
            console.log("po", pos);
            setDefaultValue({
              center: {
                lat: pos?.coords.latitude,
                lng: pos.coords.longitude,
              },
              bounds: {
                lat: pos?.coords.latitude,
                lng: pos.coords.longitude,
              },
            });
          });
        }
      });
  }, []);
  const { refetch } = useQuery(
    "getPlaces",
    () => apiService.getMapsLocations(),
    {
      onSuccess: (data) => {
        setData(data);
      },
    }
  );
  const { data: categories } = useQuery("getCat", () =>
    apiService.getCategories()
  );
  const { data: provinces } = useQuery("getProvinces", () =>
    apiService.getProvinces()
  );

  return (
    <AuthLayout>
      <S.PlacesNearMe>
        {(defaultValue?.center?.lat || defaultValue?.center?.lng) && (
          <MapComponent
            defaultValue={defaultValue}
            data={Array.isArray(data) && data?.length > 0 ? data : []}
          />
        )}
        <Corousel
          deviceType="mobile"
          data={
            Array.isArray(categories) && categories?.length > 0
              ? categories
              : []
          }
        />
        <h3>Filter</h3>
        <div className="filter">
          <Select
            placeholder="All Provinces"
            onChange={(e) => {
              setProvince(e.target.value);
            }}
            value={province}
            selectOption="select province"
            options={provinces?.map((p) => ({ value: p?._id, item: p?.name }))}
          />
          {province && (
            <Select
              placeholder="All Cities"
              onChange={(e) => {
                setCity(e.target.value);
                const pr = provinces?.find((p) => p?._id === province);
                const c = pr?.cities?.find((c) => c?._id === e.target.value);
                setData(
                  data?.filter(
                    (d) =>
                      d?.country?.province?._id === province &&
                      d?.country?.city === c?.name
                  )
                );
              }}
              value={city}
              selectOption="select city"
              options={provinces
                ?.find((p) => p?._id === province)
                ?.cities.map((c) => ({
                  value: c?._id,
                  item: c?.name,
                }))}
            />
          )}
          {(province || city) && (
            <Button
              title="clear filter"
              onClick={() => {
                setProvince("");
                setCity("");
                refetch();
              }}
            />
          )}
        </div>

        <ExperienceCard data={data} />
      </S.PlacesNearMe>
    </AuthLayout>
  );
};

export default PlacesNearMe;
