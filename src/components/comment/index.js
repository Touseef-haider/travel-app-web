import Button from "../button";
import { useState } from "react";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import * as S from "./styled";
import { useMutation } from "react-query";
import * as yup from "yup";
import apiService from "../../services/apiService";
import { useFormik } from "formik";
import Input from "../Input";

const initialSchema = {
  comment: "",
};

const Comment = ({ data, refetch }) => {
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [initialState, setInitialState] = useState(initialSchema);

  const commentMutation = useMutation(
    (data) => apiService.addCommentInExperience(data),
    {
      onSuccess: () => {
        refetch();
        setCommentId("");
        setId("");
        setOpen(false);
        setInitialState({ ...initialSchema, comment: "" });
      },
    }
  );

  const deleteCommentMutation = useMutation(
    (data) => apiService.deleteCommentInExperience(data),
    {
      onSuccess: () => {
        refetch();
        setCommentId("");
        setId("");
        setOpen(false);
      },
    }
  );

  const updateMutation = useMutation(
    (data) => apiService.updateCommentInExperience(data),
    {
      onSuccess: (data) => {
        refetch();
        setId("");
        setOpen(false);
      },
    }
  );

  const schema = yup.object({
    comment: yup.string().required("*comment is required"),
  });

  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (data) => {
      console.log(data);
      if (commentId) {
        updateMutation.mutate({ _id: id, comment_id: commentId, ...data });
      } else {
        commentMutation.mutate({ _id: id, ...data });
      }
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <S.Comment>
      {data?.comments?.map((c) => (
        <div className="comment">
          <span>{c?.by?.first_name}</span>
          <p>{c?.message}</p>
          <img
            className="edit-comment"
            onClick={() => {
              setOpen(true);
              setCommentId(c?._id);
              setId(data?._id);
              setInitialState({
                comment: c?.message,
              });
            }}
            src={Edit}
            alt="edit"
          />
          <img
            className="delete-comment"
            onClick={() => {
              deleteCommentMutation.mutate({
                _id: data?._id,
                comment_id: c?._id,
              });
            }}
            src={Delete}
            alt="delete"
          />
        </div>
      ))}

      {open && (
        <Input
          value={values.comment}
          error={errors.comment}
          name="comment"
          onChange={handleChange}
          type="text"
          placeholder="comment"
        />
      )}
      <div className="d-flex j-end">
        <Button
          title={open ? "Cancel" : "Comment"}
          onClick={() => {
            setId(data?._id);
            setOpen(!open);
          }}
        />
        {open && (
          <Button title={commentId ? "Update" : "Add"} onClick={handleSubmit} />
        )}
      </div>
    </S.Comment>
  );
};

export default Comment;
