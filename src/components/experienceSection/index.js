import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Comment from "../comment";

const ExperienceSection = ({
  data,
  profile,
  title,
  deleteMutation,
  filterBy,
  refetch,
}) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/experience?id=${id}`);
  };
  const handleDelete = (id) => {
    deleteMutation.mutate({ _id: id });
  };
  return (
    <S.ExperienceSection>
      <h1>{title}</h1>
      {Array.isArray(data) &&
        data
          ?.filter((i) => i?.category === filterBy)
          ?.map((cat) => (
            <div className="section" key={cat?.title}>
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
                  <span style={{ float: "right", marginRight: "60px" }}>
                    {cat?.profile?.first_name}
                  </span>
                </>
              ) : (
                <span style={{ float: "right", marginRight: "0px" }}>
                  {cat?.profile?.first_name} created album
                </span>
              )}

              <label htmlFor="h1" className="label">
                title:
              </label>
              <h1>{cat?.title}</h1>
              <label htmlFor="p" className="label">
                description:
              </label>
              <p>{cat?.description}</p>
              <label htmlFor="p" className="label">
                Category Name:
              </label>
              <p>{cat?.category}</p>
              {/* {album?.files?.map((el) => (
                <img width="300" src={getImage(el?.data)} alt="album" />
              ))} */}
              <Comment refetch={refetch} data={cat} key="comment" />
            </div>
          ))}
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
