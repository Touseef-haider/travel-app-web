import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Comment from "../comment";
import Like from "../../assets/blackLike.png";
import theme from "../../globalStyles/theme";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";

const ExperienceSection = ({
  data,
  profile,
  deleteMutation,
  filterBy,
  refetch,
}) => {
  const navigate = useNavigate();

  const likeMutation = useMutation(
    (data) => apiService.updateLikeOnPostExperience(data),
    {
      onSuccess: (data) => {
        refetch();
      },
    }
  );
  const handleEdit = (id) => {
    navigate(`/experience?id=${id}`);
  };
  const handleDelete = (id) => {
    deleteMutation.mutate({ _id: id });
  };

  const handleLike = (e, expId, isLiked) => {
    console.log(isLiked);
    likeMutation.mutate({
      _id: expId,
      is_liked: isLiked === false ? true : false,
    });
  };

  console.log(data?.filter((i) => i?.category === filterBy));
  return (
    <S.ExperienceSection>
      {Array.isArray(data) &&
        data
          ?.filter((i) => i?.category === filterBy)
          ?.map((cat) => (
            <div className="section" key={cat?.description}>
              <div
                className="like"
                style={{
                  backgroundColor: `${
                    cat?.liked_by?.includes(profile?._id)
                      ? theme.colors.primary
                      : ""
                  }`,
                }}
              >
                <img
                  onClick={(e) => {
                    handleLike(
                      e,
                      cat?._id,
                      cat?.liked_by?.includes(profile?._id)
                    );
                  }}
                  src={Like}
                  width={25}
                  height={25}
                  alt="like button"
                />
                <span className="liked-length primary">
                  {cat?.liked_by.length}
                </span>
              </div>
              {cat?.profile?._id === profile?._id ? (
                <>
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
                </>
              ) : (
                <span style={{ float: "right", marginRight: "0px" }}>
                  {cat?.profile?.first_name} created album
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
                </p>
              </div>
              <label htmlFor="p" className="label">
                description:
              </label>
              <div dangerouslySetInnerHTML={{ __html: cat?.description }}></div>
              <div className="gallery">
                {Array.isArray(cat?.images) && cat?.images.length > 0
                  ? cat?.images?.map((img) => (
                      <img width={300} src={img} alt="img" />
                    ))
                  : ""}
              </div>

              <Comment refetch={refetch} data={cat} key="comment" />
            </div>
          ))}
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
