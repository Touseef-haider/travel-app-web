import AuthLayout from "../../layouts/authLayout";
import * as S from "./styled";
import TextArea from "../../components/textArea/";
import Button from "../../components/button";
import apiService from "../../services/apiService";
import toastify from "../../components/toast";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { useState } from "react";
import * as yup from "yup";

const initialState = {
  story: "",
};

const Stories = () => {
  const [initialValues] = useState(initialState);

  const { mutate, isLoading } = useMutation(
    "addStory",
    (data) => apiService.addStory(data),
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
    story: yup
      .string()
      .min(10, "*too short")
      .required("*description is required"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data, { resetForm }) => {
      mutate(data);
      resetForm(initialState);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  return (
    <AuthLayout>
      <S.Stories>
        <h1>Story</h1>

        <TextArea
          label="Story"
          value={values.story}
          error={errors.story}
          name="story"
          onChange={handleChange}
          placeholder="Add story description"
        />

        <Button
          hasBackground
          size="large"
          type="button"
          title={isLoading ? "Please wait..." : "Add Story"}
          onClick={handleSubmit}
        />
      </S.Stories>
    </AuthLayout>
  );
};

export default Stories;
