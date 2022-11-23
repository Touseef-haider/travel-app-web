import * as S from "./styled";
import UnAuthLayout from "../../layouts/unAuthLayout";
import Input from "../../components/Input/index";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { useState } from "react";
import Button from "../../components/button";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import toastify from "../../components/toast";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [initialValues] = useState(initialState);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation((data) => apiService.login(data), {
    onSuccess: (data) => {
      toastify("success", data?.message);
    },
    onError: (err) => {
      toastify("error", err?.message);
    },
  });

  const validationSchema = yup.object({
    email: yup.string().email().required("*email is required"),
    password: yup.string().required("*password is required"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => {
      mutate(data);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <UnAuthLayout>
      <S.Login>
        <p className="login-title">LOGIN</p>
        <div className="section">
          <div className="login-section">
            <h1 className="txt">Login to an existing account</h1>
            <h2 className="reg-txt">
              Use the email you entered while registering
            </h2>
            <Input
              label="Email Address"
              value={values.email}
              error={errors.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
            />
            <Input
              label="Password"
              value={values.password}
              error={errors.password}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Your Password"
            />
            <NavLink
              to="/forgot-password"
              className="primary"
              style={{ float: "right" }}
              title="Forgot Password?"
            >
              Forgot Password?
            </NavLink>
            <Button
              onClick={handleSubmit}
              size="large"
              type="button"
              hasBackground
              title={isLoading ? "Please wait ..." : "Log In"}
            />
          </div>
        </div>
        <center>
          <p style={{ paddingBottom: "10px" }}>
            Note: By registering, you are agree to our
            <NavLink to="#" className="primary">
              {" "}
              Privacy Policy{" "}
            </NavLink>
            and
            <NavLink to="#" className="primary">
              {" "}
              Terms of use.
            </NavLink>
          </p>
        </center>
        <div className="mt-50 text-align-center">
          <h2>Don't Have an Account? </h2>
          <Button
            onClick={() => navigate("/register")}
            size="small"
            type="button"
            title="Register"
          />
        </div>
      </S.Login>
    </UnAuthLayout>
  );
};

export default Login;
