import React from "react";
import AuthHeader from "../components/authHeader";
import Footer from "../components/footer";

const AuthLayout = ({ children, showFooter }) => {
  return (
    <React.Fragment>
      <AuthHeader />
      {children}
      {showFooter && <Footer />}
    </React.Fragment>
  );
};

export default AuthLayout;
