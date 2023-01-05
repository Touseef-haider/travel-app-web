/* eslint-disable jsx-a11y/img-redundant-alt */
import { useMutation, useQuery } from "react-query";
import apiService from "../../services/apiService";
import { useLocation } from "react-router-dom";
import toastify from "../toast";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Select from "../select";
import Button from "../button";
import { categories } from "../../pages/experience/index";
import Quill from "../quill";
import Input from "../Input";
import HOCLoading from "../loadingHoc";

const initialState = {
  description: "",
  category: "",
  files: [],
};

const PostExperience = ({ handleFetch, setIsLoading }) => {
  const location = useLocation();
  const fileRef = useRef(null);
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
  console.log("values", values);

  const addFile = useMutation((data) => apiService.addFile(data), {
    onSuccess: ({ data }) => {
      console.log("dafa", data);
      setIsLoading(false);
      setFieldValue("files", data?.Location);
    },
    onError: (error) => {
      toastify("error", error.message);
      setIsLoading(false);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    addFile.mutate(formData);
  };

  return (
    <form style={{ padding: "0 20px" }} onSubmit={handleSubmit}>
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

      <br />

      <Input
        type="file"
        ref={fileRef}
        // style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* <Button
        type="button"
        size="large"
        title="Upload Image"
        onClick={() => {
          console.log("hello");
          fileRef.current.click();
        }}
      /> */}

      <br />

      <div>
        {values.files.map((file) => (
          <img src={file} alt="image" width={50} height={50} />
        ))}
      </div>

      <Button
        hasBackground
        type="submit"
        size="large"
        title={isLoading ? "Please wait" : !id ? "Add Album" : "Update Album"}
      />
    </form>
  );
};

export default HOCLoading(PostExperience);
