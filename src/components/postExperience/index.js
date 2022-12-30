import { useMutation, useQuery } from "react-query";
import apiService from "../../services/apiService";
import { useLocation } from "react-router-dom";
import toastify from "../toast";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../button";
import Select from "../select";
import { categories } from "../../pages/experience/index";
import Quill from "../quill";

const initialState = {
  description: "",
  category: "",
  files: [],
};

const PostExperience = ({ handleFetch }) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const [initialValues, setInitialValues] = useState(initialState);

  const id = search.get("id");

  const {
    mutate: add,
    isLoading,
    reset,
  } = useMutation("add", (data) => apiService.addExperience(data), {
    onSuccess: (data) => {
      toastify("success", data?.message);
      setInitialValues(initialState);
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
    },
  });

  const validationSchema = yup.object({
    description: yup
      .string()
      .min(5, "*too short")
      .required("*description is required"),
    category: yup.string().required("*category is required"),
    files: yup.array(),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data, { resetForm }) => {
      if (data?._id) {
        update(data);
      } else {
        const formData = new FormData();
        data?.files?.forEach((i) => {
          formData.append("files", i);
        });
        add(
          { ...data, images: formData },
          {
            onSuccess: () => {
              resetForm();
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
  return (
    <form
      style={{ padding: "0 20px" }}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
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

      <Quill
        value={values.description}
        name="description"
        onChange={(e) => setFieldValue("description", e)}
      />

      {/* <TextArea
        label="Description"
        value={values.description}
        error={errors.description}
        name="description"
        onChange={handleChange}
        placeholder="Add album description"
      /> */}

      <Button
        hasBackground
        type="submit"
        size="large"
        title={isLoading ? "Please wait" : !id ? "Add Album" : "Update Album"}
      />
    </form>
  );
};

export default PostExperience;
