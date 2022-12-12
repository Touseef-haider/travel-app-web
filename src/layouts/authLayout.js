import React from "react";
import Alerts from "../components/alerts";
import AuthHeader from "../components/authHeader";
import Footer from "../components/footer";

const AuthLayout = ({ children, showFooter }) => {
  return (
    <React.Fragment>
      <AuthHeader />
      {/* <Alerts /> */}
      {children}
      {showFooter && <Footer />}
    </React.Fragment>
  );
};

export default AuthLayout;
