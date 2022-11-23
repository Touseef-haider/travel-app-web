import * as S from "../login/styled";
import UnAuthLayout from "../../layouts/unAuthLayout";
import Input from "../../components/Input/index";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { useState } from "react";
import Button from "../../components/button";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import toastify from "../../components/toast/index";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();

  const [initialValues] = useState(initialState);

  const { mutate } = useMutation((data) => apiService.register(data), {
    onSuccess: (data) => {
      toastify("success", data?.message);
    },
    onError: (err) => {
      toastify("error", err?.message);
    },
  });

  const validationSchema = yup.object({
    first_name: yup.string().required("*first name is required"),
    last_name: yup.string().required("*last name is required"),
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
        <p className="login-title">REGISTER</p>
        <div className="two-column-grid">
          <div>
            <Input
              label="First Name"
              value={values.first_name}
              error={errors.first_name}
              name="first_name"
              onChange={handleChange}
              type="string"
              placeholder="Your First Name"
            />
            <Input
              label="Last Name"
              value={values.last_name}
              error={errors.last_name}
              type="string"
              name="last_name"
              onChange={handleChange}
              placeholder="Your Last Name"
            />
          </div>
          <div>
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
          </div>
        </div>
        <div className="register-btn">
          <Button
            onClick={handleSubmit}
            size="small"
            type="button"
            hasBackground
            title="Register"
          />
        </div>
        <center>
          <p>
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
          <h2>Already Have an Account? </h2>
          <Button
            onClick={() => navigate("/login")}
            size="small"
            type="button"
            title="Log In"
          />
        </div>
      </S.Login>
    </UnAuthLayout>
  );
};

export default Register;
