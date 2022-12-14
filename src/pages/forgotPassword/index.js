import * as S from "../login/styled";
import UnAuthLayout from "../../layouts/unAuthLayout";
import Input from "../../components/Input/index";
import * as yup from "yup";

import { useFormik } from "formik";
import { useState } from "react";
import Button from "../../components/button";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import toastify from "../../components/toast/index";

const initialState = {
  email: "",
};

const ForgotPassword = () => {
  const [initialValues, setInitialValues] = useState(initialState);

  const { mutate, isLoading } = useMutation(
    (data) => apiService.forgotPassword(data),
    {
      onSuccess: (data) => {
        toastify("success", data?.message);
        setInitialValues(initialState);
      },
      onError: (err) => {
        toastify("error", err?.message);
      },
    }
  );

  const validationSchema = yup.object({
    email: yup.string().email().required("*email is required"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    validateOnChange: true,
    onSubmit: (data) => {
      mutate(data);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <UnAuthLayout>
      <S.Login
        style={{
          transform: "translateY(50%)",
        }}
      >
        <p className="login-title">FORGOT PASSWORD</p>
        <div className="section">
          <div className="login-section">
            <Input
              label="Email Address"
              value={values.email}
              error={errors.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
            />
            <Button
              onClick={handleSubmit}
              size="large"
              type="button"
              hasBackground
              title={isLoading ? "Please wait ..." : "Request"}
            />
          </div>
        </div>
      </S.Login>
    </UnAuthLayout>
  );
};

export default ForgotPassword;
