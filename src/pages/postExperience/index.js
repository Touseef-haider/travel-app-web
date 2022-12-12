/* eslint-disable no-dupe-keys */
import Input from "../../components/Input";
import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";
import { useState, useRef } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import toastify from "../../components/toast/index";
import TextArea from "../../components/textArea/index";
import Button from "../../components/button";
import Select from "../../components/select";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const categories = [
  {
    value: "alert",
    item: "Alert",
  },
  {
    value: "ask_questions",
    item: "Ask Questions",
  },
  {
    value: "share_experience",
    item: "Share Experience",
  },
  {
    value: "story",
    item: "Share Story",
  },
  {
    value: "album",
    item: "Share album",
  },
];

const initialState = {
  title: "",
  description: "",
  category: "",
  files: [],
};

const PostExperience = () => {
  const [initialValues, setInitialValues] = useState(initialState);
  let inputRef = useRef(null);
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  console.log("iddd", id);

  const { mutate: add, isLoading } = useMutation(
    "add",
    (data) => apiService.addExperience(data),
    {
      onSuccess: (data) => {
        toastify("success", data?.message);
      },
      onError: (err) => {
        toastify("error", err?.message);
      },
    }
  );
  const { mutate: update } = useMutation(
    "update",
    (data) => apiService.updateExperience(data),
    {
      onSuccess: (data) => {
        toastify("success", data?.message);
      },
      onError: (err) => {
        toastify("error", err?.message);
      },
    }
  );

  useQuery("get", () => apiService.getParticularExperience(id), {
    enabled: !!id,
    onSuccess: (data) => {
      setInitialValues(data);
    },
  });

  const validationSchema = yup.object({
    title: yup.string().when("category", {
      is: "story",
      then: yup.string(),
      otherwise: yup.string().required("*title is required"),
    }),
    description: yup
      .string()
      .min(5, "*too short")
      .required("*description is required"),
    description: yup.string().required("*description is required"),
    category: yup.string().required("*category is required"),
    files: yup.array(),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => {
      console.log(data);
      if (data?._id) {
        update(data);
      } else {
        const formData = new FormData();
        data?.files?.forEach((i) => {
          formData.append("files", i);
        });
        add({ ...data, formData });
      }
    },
  });

  const { values, errors, handleChange, setFieldValue, handleSubmit } = formik;
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (upload) => {
      setFieldValue("files", [...values.files, upload.target.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    const arr = [...values?.images];

    arr.splice(index, 1);

    setFieldValue("files", arr);
  };

  const getImage = (data) => {
    console.log(data);
    const str = `data:image/jpeg;base64,${btoa(
      String.fromCharCode(...new Uint8Array(data))
    )}`;
    console.log(str);
    // const str = `data:image/jpg;base64,${data?.toString("base64")}`;
    return str;
  };
  console.log(values);

  return (
    <AuthLayout>
      <S.Experience>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Experience</h1>
          <Select
            label="Category Name"
            value={values.category}
            error={errors.category}
            options={categories}
            name="category"
            onChange={handleChange}
            placeholder="Add album category name"
          />
          {values.category !== "story" && (
            <Input
              label="Title"
              value={values.title}
              error={errors.title}
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Add album title"
            />
          )}
          <TextArea
            label="Description"
            value={values.description}
            error={errors.description}
            name="description"
            onChange={handleChange}
            placeholder="Add album description"
          />
          <label htmlFor="file">Photo</label>
          <br />
          <input
            id="file"
            multiple={false}
            name="files"
            type="file"
            hidden={true}
            className="display-none"
            ref={inputRef}
            accept=".jpg,.jpeg,.png,image/*"
            onChange={handleFileChange}
          />
          <Button
            hasBackground
            size="small"
            title="Add Photos"
            onClick={() => inputRef.current.click()}
          />
          <div className="images">
            {values?.files?.map((album, index) => (
              <div key={album} className="image-holder">
                <p
                  onClick={() => handleRemoveImage(index)}
                  className="close-btn"
                >
                  X
                </p>
                <img src={id ? getImage(album?.data) : album} alt="images" />
              </div>
            ))}
          </div>

          <Button
            hasBackground
            type="submit"
            size="large"
            title={
              isLoading ? "Please wait" : !id ? "Add Album" : "Update Album"
            }
          />
        </form>
      </S.Experience>
    </AuthLayout>
  );
};

export default PostExperience;
