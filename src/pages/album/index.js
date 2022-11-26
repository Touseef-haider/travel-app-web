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

const initialState = {
  title: "",
  description: "",
  category: "",
  album: [],
};

const Album = () => {
  const [initialValues] = useState(initialState);
  const inputRef = useRef(null);

  const { mutate, isLoading } = useMutation(
    "addAlbum",
    (data) => apiService.addAlbum(data),
    {
      onSuccess: (data) => {
        toastify("success", data?.message);
      },
      onError: (err) => {
        toastify("error", err?.message);
      },
    }
  );

  const validationSchema = yup.object({
    title: yup.string().required("*title is required"),
    description: yup
      .string()
      .min(5, "*too short")
      .required("*description is required"),
    description: yup.string().required("*description is required"),
    category: yup.string().required("*category is required"),
    album: yup.array().required("*image is required"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => {
      console.log(data);
      const formData = new FormData();
      data?.album?.map((i) => {
        formData.append("file", i);
      });
      console.log(formData);
      mutate({ ...data, album: data?.album });
    },
  });

  const { values, errors, handleChange, setFieldValue, handleSubmit } = formik;
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (upload) => {
      setFieldValue("album", [...values.album, upload.target.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    const arr = [...values?.album];

    arr.splice(index, 1);

    setFieldValue("album", arr);
  };

  return (
    <AuthLayout>
      <S.Album>
        <h1>Album</h1>
        <Input
          label="Title"
          value={values.title}
          error={errors.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Add album title"
        />
        <Input
          label="Category Name"
          value={values.category}
          error={errors.category}
          name="category"
          onChange={handleChange}
          type="text"
          placeholder="Add album category name"
        />
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
          type="file"
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
          {values?.album?.map((album, index) => (
            <div key={album} className="image-holder">
              <p onClick={() => handleRemoveImage(index)} className="close-btn">
                X
              </p>
              <img src={album} alt="album" />
            </div>
          ))}
        </div>

        <Button
          hasBackground
          type="button"
          size="large"
          title={isLoading ? "Please wait" : "Add Album"}
          onClick={handleSubmit}
        />
      </S.Album>
    </AuthLayout>
  );
};

export default Album;
