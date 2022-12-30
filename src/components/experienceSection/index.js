import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Comment from "../comment";

const ExperienceSection = ({
  data,
  profile,
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
      {Array.isArray(data) &&
        data
          ?.filter((i) => i?.category === filterBy)
          ?.map((cat) => (
            <div className="section" key={cat?.description}>
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
              <label htmlFor="p" className="label">
                description:
              </label>
              <div dangerouslySetInnerHTML={{ __html: cat?.description }}></div>

              <Comment refetch={refetch} data={cat} key="comment" />
            </div>
          ))}
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
