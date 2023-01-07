import { lazy } from "react";
import UnAuth from "./unAuth";
import Auth from "./auth";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));
const ForgotPassword = lazy(() => import("../pages/forgotPassword"));
const Register = lazy(() => import("../pages/register"));
const Experience = lazy(() => import("../pages/experience"));
const PlacesNearMe = lazy(() => import("../pages/placesNearMe"));
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
    route: UnAuth,
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
    component: Experience,
    exact: true,
    path: "/experience",
    title: "Share",
    route: Auth,
  },

  {
    component: PlacesNearMe,
    exact: true,
    path: "/places-near-me",
    title: "Places near me",
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
