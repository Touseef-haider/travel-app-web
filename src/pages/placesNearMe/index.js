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
  const [filter, setFilter] = useState({});
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
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
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
  };
  useEffect(() => {
    getLocation();
  }, []);
  useQuery("getPlaces", () => apiService.getMapsLocations(), {
    onSuccess: (data) => {
      setData(data);
    },
  });
  const { data: categories } = useQuery("getCat", () =>
    apiService.getCategories()
  );
  const { data: provinces } = useQuery("getProvinces", () =>
    apiService.getProvinces()
  );

  return (
    <AuthLayout>
      <S.PlacesNearMe>
        <MapComponent
          defaultValue={defaultValue}
          data={Array.isArray(data) && data?.length > 0 ? data : []}
        />
        <Corousel
          filter={filter}
          setFilter={setFilter}
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
              setCity("");
            }}
            value={province}
            selectOption="select province"
            options={
              Array.isArray(provinces) &&
              province?.length > 0 &&
              provinces?.map((p) => ({ value: p?._id, item: p?.name }))
            }
          />
          {province && (
            <Select
              placeholder="All Cities"
              onChange={(e) => {
                setCity(e.target.value);
                const pr = provinces?.find((p) => p?._id === province);
                const c = pr?.cities?.find((c) => c?._id === e.target.value);

                setFilter({ pr, c });
                if (e.target.value?.length <= 0) {
                  console.log(e.target.value);
                  setFilter({});
                }
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
          {Object.keys(filter).length > 0 && (
            <Button
              title="clear filter"
              onClick={() => {
                setFilter({});
              }}
            />
          )}
        </div>

        <ExperienceCard
          data={
            (Object.keys(filter).length > 0 &&
              data?.filter(
                (d) =>
                  (d?.country?.province?._id === filter?.pr?._id &&
                    d?.country?.city === filter?.c?.name) ||
                  d?.category?.name === filter?.cat?.name
              )) ||
            data
          }
        />
      </S.PlacesNearMe>
    </AuthLayout>
  );
};

export default PlacesNearMe;
