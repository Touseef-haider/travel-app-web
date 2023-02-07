import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import * as S from "../experienceSection/styled";

import { timeAgo } from "../../utils/formatDate";
import { useState } from "react";
import { useRef } from "react";

const ExperienceSection = ({
  data,
  profile,
  deleteMutation,
  filterBy,
  refetch,
}) => {
  const [show, setShow] = useState(-1);
  const navigate = useNavigate();

  const ref = useRef(null);

  const handleEdit = (id) => {
    navigate(`/experience?id=${id}`);
  };
  const handleDelete = (id) => {
    deleteMutation.mutate({ _id: id });
  };

  return (
    <S.ExperienceSection>
      {Array.isArray(data) &&
        data
          ?.filter((i) => i?.category === filterBy && i?.is_active)
          ?.map((cat, index) => (
            <div className="section" key={cat?.description}>
              {cat?.profile?._id === profile?._id && (
                <div
                  className="three-hor-dots"
                  ref={ref}
                  onClick={() => setShow(index)}
                >
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                </div>
              )}
              {show === index && (
                <div className="controls">
                  <img
                    className="edit"
                    onClick={() => handleEdit(cat?._id)}
                    src={Edit}
                    alt="edit"
                  />
                  <img
                    className="delete"
                    onClick={() => handleDelete(cat?._id)}
                    src={Delete}
                    alt="delete"
                  />
                  <div
                    style={{
                      padding: "20px",
                    }}
                    onClick={() => {
                      console.log("Clear");
                      setShow(null);
                    }}
                  >
                    X
                  </div>
                </div>
              )}
              {cat?.profile?._id !== profile?._id && (
                <span style={{ float: "right", marginRight: "0px" }}>
                  {cat?.profile?.first_name} created {cat?.category}
                </span>
              )}

              <div className="avatar">
                <div className="profile-photo">
                  {String(cat?.profile?.first_name).charAt(0).toUpperCase()}{" "}
                  {String(cat?.profile?.last_name).charAt(0).toUpperCase()}
                </div>
                <p>
                  <span className="bold">{cat?.profile?.first_name} </span>
                  posted at
                  <span className="bold"> {cat?.place}</span>
                  <br />
                  <span>{timeAgo(cat?.created_at)}</span>
                </p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: cat?.description }}></div>
              {Array.isArray(cat?.images) && cat?.images.length > 0 && (
                <div className="gallery">
                  {Array.isArray(cat?.images) && cat?.images.length > 0
                    ? cat?.images?.map((img) => <img src={img} alt="img" />)
                    : ""}
                </div>
              )}
            </div>
          ))}
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
