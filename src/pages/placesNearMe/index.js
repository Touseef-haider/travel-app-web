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

export const images = [
  {
    image:
      "https://traveling-images.s3.ap-northeast-1.amazonaws.com/1673027721397-1.jpg",
    title: "All Places",

    category: "Water fall",
    description: "This is category",
  },
  {
    image:
      "https://traveling-images.s3.ap-northeast-1.amazonaws.com/1673092097809-Screenshot+(4).png",
    title: "Place A",

    category: "Water fall",
    description: "This is category",
  },
  {
    image:
      "https://traveling-images.s3.ap-northeast-1.amazonaws.com/1673092166457-54.jpg",
    title: "Place B",

    category: "Water fall",
    description: "This is category",
  },

  {
    image:
      "https://traveling-images.s3.ap-northeast-1.amazonaws.com/1673100245800-1.jpg",
    title: "Place D",

    category: "Water fall",
    description: "This is category",
  },
];
const PlacesNearMe = () => {
  const [data, setData] = useState([]);
  const { refetch } = useQuery("alerts", () => apiService.getExperiences(), {
    onSuccess: (data) => {
      setData(data);
    },
  });
  return (
    <AuthLayout>
      <S.PlacesNearMe>
        <MapComponent />
        <Corousel deviceType="mobile" images={images} />
        <div className="filter">
          <h3>Filter</h3>
          <Select
            placeholder="All Cities"
            onChange={(e) => {
              if (e.target.value === "all") {
                refetch();
              }
              setData(data.filter((d) => d?.place === e.target.value));
            }}
            options={[
              { item: "all", value: "all" },
              { item: "karachi", value: "karachi" },
              { item: "islambad", value: "islamabad" },
            ]}
          />
        </div>

        <ExperienceCard data={data?.filter((i) => i?.category !== "alert")} />
      </S.PlacesNearMe>
    </AuthLayout>
  );
};

export default PlacesNearMe;
