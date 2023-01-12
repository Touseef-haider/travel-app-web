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
          <div className="card" onClick={() => navigate("/single-place")}>
            <img src={d?.image} alt="file" />
            <h4>{d?.category}</h4>
            <small>{d?.description}</small>
            <div className="detail">
              <p>0 stories</p>
              <p>0 Questions</p>
              <p>1 Experience</p>
            </div>
            <div className="symbol">
              <img src={Pointer} alt="sym" />
            </div>
          </div>
        ))}
      </div>
    </S.ExperienceCard>
  );
};

export default ExperienceCard;
