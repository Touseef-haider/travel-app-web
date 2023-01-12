/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { useMutation, useQuery } from "react-query";
import apiService from "../../services/apiService";
import { useLocation } from "react-router-dom";
import toastify from "../toast";
import { useState, useEffect } from "react";
import Delete from "../../assets/delete.svg";
import * as yup from "yup";
import { useFormik } from "formik";
import Select from "../select";
import Button from "../button";
import { categories } from "../../pages/experience/index";
import Quill from "../quill";
import Input from "../Input";

const initialState = {
  description: "",
  category: "",
  place: "",
};

const PostExperience = ({ handleFetch, images, setImages }) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const fileRef = useRef(null);
  const [initialValues, setInitialValues] = useState(initialState);

  const id = search.get("id");
  const { mutate: imageMutation } = useMutation(
    "img",
    (data) => apiService.addFile(data),
    {
      onSuccess: ({ data }) => {
        const img = [...images];
        img.push(data?.Location);
        setImages(img);
      },
      onError: (error) => {
        toastify("error", error.message);
      },
    }
  );

  const {
    mutate: add,
    isLoading,
    reset,
  } = useMutation("add", (data) => apiService.addExperience(data), {
    onSuccess: (data) => {
      toastify("success", data?.message);
      setInitialValues(initialState);
      setImages([]);
      reset();
    },
    onError: (err) => {
      toastify("error", err?.message);
    },
  });

  const { mutate: update } = useMutation(
    "update",
    (data) => apiService.updateExperience(data),
    {
      onSuccess: (data) => {
        toastify("success", data?.message);
        handleFetch();
      },
      onError: (err) => {
        toastify("error", err?.message);
      },
    }
  );

  useQuery("get", () => apiService.getParticularExperience(id), {
    enabled: !!id,
    retry: 3,
    onSuccess: (data) => {
      setInitialValues(data);
      setImages(data?.images);
    },
  });

  const validationSchema = yup.object({
    description: yup
      .string()
      .min(5, "*too short")
      .required("*description is required"),
    category: yup.string().required("*category is required"),
    place: yup.string().required("*place is required"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data, { resetForm }) => {
      if (data?._id) {
        update({ ...data, images: [...images] });
      } else {
        add(
          { ...data, images: [...images] },
          {
            onSuccess: () => {
              resetForm();
              setInitialValues(initialState);
              handleFetch();
            },
          }
        );
      }
    },
  });

  useEffect(() => {
    if (!id) {
      setInitialValues({
        ...initialValues,
        category: categories.find((c) => c.value === "alert").value,
      });
    }
  }, []);

  const { values, errors, handleChange, setFieldValue, handleSubmit } = formik;

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      if (file) {
        imageMutation(formData);
      }
      e.target.value = "";
    }
  };

  const handleRemoveImage = (ind) => {
    const filteredImg = images.filter((img, i) => i !== ind);
    setImages(filteredImg);
  };

  return (
    <div>
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

      <Input
        label="Add place"
        placeholder="place"
        value={values.place}
        error={errors.place}
        onChange={handleChange}
        name="place"
      />

      <Quill
        value={values.description}
        name="description"
        onChange={(e) => setFieldValue("description", e)}
      />

      <br />

      <input
        ref={fileRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <Button
        type="button"
        size="large"
        title="Upload Image"
        onClick={(e) => {
          e.stopPropagation();
          fileRef.current.click();
        }}
      />

      <br />

      <div className="images">
        {images?.map((file, index) => (
          <div key={file + index} className="image-holder">
            <img
              src={Delete}
              onClick={() => handleRemoveImage(index)}
              alt="delete"
              className="image-delete-btn"
            />
            <img
              src={file}
              className="image"
              alt="image"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>

      <Button
        hasBackground
        type="submit"
        size="large"
        onClick={handleSubmit}
        title={isLoading ? "Please wait" : !id ? "Add Album" : "Update Album"}
      />
    </div>
  );
};

export default PostExperience;
