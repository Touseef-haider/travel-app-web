import { lazy } from "react";
import UnAuth from "./unAuth";
import Auth from "./auth";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));
const ForgotPassword = lazy(() => import("../pages/forgotPassword"));
const Register = lazy(() => import("../pages/register"));
const Stories = lazy(() => import("../pages/stories"));
const Album = lazy(() => import("../pages/album"));
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
    component: Stories,
    exact: true,
    path: "/stories",
    title: "Stories",
    route: Auth,
  },
  {
    component: Album,
    exact: true,
    path: "/album",
    title: "Album",
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
