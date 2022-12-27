import * as S from "./styled";
import UnAuthLayout from "../../layouts/unAuthLayout";
import Input from "../../components/Input/index";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import toastify from "../../components/toast";
import {
  Login as LogIn,
  RequestLogin,
  ResetAuthError,
} from "../../redux/actions/index";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state?.auth);
  const [initialValues] = useState(initialState);

  useEffect(() => {
    if (error) {
      toastify("error", error);
      dispatch(ResetAuthError());
    } else if (user) {
      console.log(user);
      navigate("/experience");
    }
  }, [dispatch, navigate, error, user]);

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
      // mutate(data);
      dispatch(RequestLogin());
      dispatch(LogIn(data));
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
              title={loading ? "Please wait ..." : "Log In"}
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
