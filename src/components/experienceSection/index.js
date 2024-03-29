import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Comment from "../comment";
import Like from "../../assets/blackLike.png";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import { timeAgo } from "../../utils/formatDate";
import { useState } from "react";
import { useRef } from "react";
import theme from "../../globalStyles/theme";

const ExperienceSection = ({
  data,
  profile,
  deleteMutation,
  filterBy,
  refetch,
}) => {
  const [show, setShow] = useState(-1);
  const navigate = useNavigate();

  const likeMutation = useMutation(
    (data) => apiService.updateLikeOnPostExperience(data),
    {
      onSuccess: (data) => {
        refetch();
      },
    }
  );
  const ref = useRef(null);

  const handleEdit = (id) => {
    navigate(`/experience?id=${id}`);
    setShow(-1);
  };
  const handleDelete = (id) => {
    deleteMutation.mutate({ _id: id });
    setShow(-1);
  };

  const handleLike = (e, expId, isLiked) => {
    likeMutation.mutate({
      _id: expId,
      is_liked: isLiked === false ? true : false,
    });
  };

  const handleShow = (index) => {
    setShow(index);
  };

  console.log(show);
  return (
    <S.ExperienceSection>
      {Array.isArray(data) &&
        data
          ?.filter((i) => i?.category === filterBy)
          ?.map((cat, index) => (
            <div className="section" key={cat?.description}>
              {cat?.profile?._id === profile?._id && (
                <div
                  className="three-hor-dots"
                  ref={ref}
                  onClick={() => handleShow(index)}
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
              <div
                className="like"
                style={{
                  backgroundColor: `${
                    cat?.liked_by?.includes(profile?._id)
                      ? theme.colors.primary
                      : ""
                  }`,
                  boxShadow: "0 0 5px 0 !important",
                  marginTop: "10px",
                  borderRadius: "50%",
                }}
                onClick={(e) => {
                  handleLike(
                    e,
                    cat?._id,
                    cat?.liked_by?.includes(profile?._id)
                  );
                }}
              >
                <img src={Like} width={25} height={25} alt="like button" />
                <span className="liked-length primary">
                  {cat?.liked_by?.includes(profile?._id) ? "Unlike" : "Like"}
                </span>
              </div>
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

              <Comment refetch={refetch} data={cat} key="comment" />
            </div>
          ))}
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
