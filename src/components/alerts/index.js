import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import * as S from "./styled";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import Input from "../Input/";
import { useState } from "react";
import Button from "../button";
import * as yup from "yup";
import { useFormik } from "formik";

const initialSchema = {
  comment: "",
};

const Alerts = ({ alerts, profile, refetch }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [commentId, setCommentId] = useState("");
  const [open, setOpen] = useState(false);
  const [initialState, setInitialState] = useState(initialSchema);

  const commentMutation = useMutation(
    (data) => apiService.addCommentInExperience(data),
    {
      onSuccess: (data) => {
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
      onSuccess: (data) => {
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

  const deleteMutation = useMutation(
    "deleteAlert",
    (data) => apiService.deleteExperience(data),
    {
      onSuccess: () => {
        refetch();
        setId("");
      },
    }
  );
  const handleEdit = (id) => {
    navigate(`/experience?id=${id}`);
  };
  const handleDelete = (id) => {
    deleteMutation.mutate({ _id: id });
  };

  const schema = yup.object({
    comment: yup.string().required("*comment is required"),
  });

  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (data) => {
      if (commentId) {
        updateMutation.mutate({ _id: id, comment_id: commentId, ...data });
      } else {
        commentMutation.mutate({ _id: id, ...data });
      }
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  const filteredAlerts =
    Array.isArray(alerts) &&
    alerts?.length > 0 &&
    alerts?.filter((a) => a?.is_active);
  return (
    <S.Alerts>
      <div className="story-section">
        <h1>Alerts</h1>
        {Array.isArray(filteredAlerts) && filteredAlerts?.length > 0
          ? filteredAlerts?.map((alert) => (
              <div className="story" key={alert}>
                {alert?.profile?._id === profile?._id ? (
                  <>
                    <img
                      className="edit"
                      onClick={() => handleEdit(alert?._id)}
                      src={Edit}
                      alt="edit"
                    />
                    <img
                      className="delete"
                      onClick={() => handleDelete(alert?._id)}
                      src={Delete}
                      alt="delete"
                    />

                    <span style={{ float: "right", marginRight: "60px" }}>
                      {alert?.profile?.first_name}
                    </span>
                  </>
                ) : (
                  <span style={{ float: "right", marginRight: "0px" }}>
                    {alert?.profile?.first_name} created alert
                  </span>
                )}

                <label htmlFor="h1" className="label">
                  description:
                </label>
                <div
                  dangerouslySetInnerHTML={{ __html: alert?.description }}
                ></div>
                {alert?.comments?.map((c) => (
                  <div className="comment">
                    <span>{c?.by?.first_name}</span>
                    <p>{c?.message}</p>
                    <img
                      className="edit-comment"
                      onClick={() => {
                        setOpen(true);
                        setCommentId(c?._id);
                        setId(alert?._id);
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
                          _id: alert?._id,
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
                      setId(alert?._id);
                      setOpen(!open);
                    }}
                  />
                  {open && (
                    <Button
                      title={commentId ? "Update" : "Add"}
                      onClick={handleSubmit}
                    />
                  )}
                </div>
              </div>
            ))
          : "No active alerts"}
      </div>
    </S.Alerts>
  );
};

export default Alerts;
