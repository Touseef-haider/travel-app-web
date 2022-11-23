import { lazy } from "react";
import UnAuth from "./unAuth";
import Auth from "./auth";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));
const ForgotPassword = lazy(() => import("../pages/forgotPassword"));
const Register = lazy(() => import("../pages/register"));

export const ROUTES = [
  {
    component: Login,
    exact: true,
    path: "/login",
    title: "Login",
    route: UnAuth,
  },
  {
    component: Home,
    exact: true,
    path: "/",
    title: "Home",
    route: Auth,
  },
  {
    component: ForgotPassword,
    exact: true,
    path: "/forgot-password",
    title: "Forgot Password",
    route: UnAuth,
  },
  {
    component: Register,
    exact: true,
    path: "/register",
    title: "Register",
    route: UnAuth,
  },
];
