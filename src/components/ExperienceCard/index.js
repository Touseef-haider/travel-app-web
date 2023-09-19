import React from "react";
import * as S from "./styled.js";
import Pointer from "../../assets/point.png";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import apiService from "../../services/apiService.js";

const ExperienceCard = ({ data }) => {
  const navigate = useNavigate();
  const ratingMutation = useMutation((data) => apiService.updateParticularMapLocation(data))
  const [count, setCount] = useState(5)

  const ratingChanged = (newRating, id) => {
    console.log(newRating, id);
    setCount(newRating)
    ratingMutation.mutate({
      id,
      rating: newRating
    })

  };
  return (
    <S.ExperienceCard>
      <div className="experience-section">
        {Array.isArray(data) &&
          data.length > 0 &&
          data?.map((d) => (
            <div
            key={data?._id}
              className="card"
            >
              <img
                src={
                  d?.images.length > 0
                    ? d?.images[0]
                    : "https://traveling-images.s3.ap-northeast-1.amazonaws.com/1673027721397-1.jpg"
                }
                alt="file"
                style={{
                  width:"100%",
                  // height:"100%",
                  objectFit:"cover"
                }}
                onClick={() => navigate(`/single-place/${d?._id}`)}

              />
              <div>
                <h5>{d?.name}</h5>
                <h4>{d?.category?.name}</h4>
              </div>
              <small
                dangerouslySetInnerHTML={{ __html: d?.description }}
              ></small>
              <div className="d-flex" style={{ gap: "10px" }}>
                <div className="symbol">
                  <img src={Pointer} alt="sym" />
                </div>
                <small style={{ alignSelf: "center" }}>{d?.location}</small>
              </div>
              <h3>Rating</h3>
              
              {
                d?.rating ?
                  <ReactStars
                    count={5}
                    size={24}
                    onChange={(r) => ratingChanged(r, d?._id)}


                  value={d?.rating}
                    activeColor="#ffd700"
                  /> :
                  <ReactStars
                    onChange={(r) => ratingChanged(r, d?._id)}
                    value={count}
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                  />
              }
            </div>
          ))}
      </div>
    </S.ExperienceCard>
  );
};

export default ExperienceCard;
