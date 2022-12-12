import { lazy } from "react";
import UnAuth from "./unAuth";
import Auth from "./auth";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));
const ForgotPassword = lazy(() => import("../pages/forgotPassword"));
const Register = lazy(() => import("../pages/register"));
const PostExperience = lazy(() => import("../pages/postExperience"));
const Account = lazy(() => import("../pages/account"));

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

  {
    component: PostExperience,
    exact: true,
    path: "/experience",
    title: "Share",
    route: Auth,
  },
  {
    component: PostExperience,
    exact: true,
    path: "/experience/:id",
    title: "Share",
    route: Auth,
  },
  {
    component: Account,
    exact: true,
    path: "/account",
    title: "My Account",
    route: Auth,
  },
];
