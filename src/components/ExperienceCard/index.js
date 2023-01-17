import React from "react";
import * as S from "./styled.js";
import Pointer from "../../assets/point.png";
import { useNavigate } from "react-router-dom";

const ExperienceCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <S.ExperienceCard>
      <div className="experience-section">
        {data?.map((d) => (
          <div
            className="card"
            onClick={() => navigate(`/single-place/${d?._id}`)}
          >
            <img
              src={
                d?.images.length > 0
                  ? d?.images[0]
                  : "https://traveling-images.s3.ap-northeast-1.amazonaws.com/1673027721397-1.jpg"
              }
              alt="file"
            />
            <h4>{d?.category?.name}</h4>
            <small dangerouslySetInnerHTML={{ __html: d?.description }}></small>
            <div className="d-flex" style={{ gap: "10px" }}>
              <div className="symbol">
                <img src={Pointer} alt="sym" />
              </div>
              <p style={{ alignSelf: "center" }}>{d?.location}</p>
            </div>
          </div>
        ))}
      </div>
    </S.ExperienceCard>
  );
};

export default ExperienceCard;
