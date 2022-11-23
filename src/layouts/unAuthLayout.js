import Header from "../components/header/";
const UnAuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default UnAuthLayout;
