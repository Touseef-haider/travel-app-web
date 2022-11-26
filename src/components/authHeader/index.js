import * as S from "./styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import apiService from "../../services/apiService";
import { useState, useRef, useEffect } from "react";
import { clear } from "../../utils/storage";

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { ref, isComponentVisible, setIsComponentVisible };
}
const AuthHeader = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const navigate = useNavigate();
  const { data } = useQuery("getProfile", () => apiService.getOwnProfile());

  const handleSignOut = () => {
    clear();
    window.location.reload();
  };

  return (
    <S.AuthHeader>
      <h1 onClick={() => navigate("/")}>Travel App</h1>
      <div className="controls">
        <div className="links-section">
          <ul>
            <li>
              <NavLink to="/stories">Stories</NavLink>
            </li>
            <li>
              <NavLink to="/album">Albums</NavLink>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          className="profile-section"
        >
          <div className="circle">
            {data?.first_name?.charAt(0)}
            {data?.last_name?.charAt(0)}
          </div>
          <div className="profile">
            <p className="name">
              {data?.first_name} {data?.last_name}
            </p>
            <p className="email">@{data?.user?.email?.split("@")[0]} </p>
          </div>
          {isComponentVisible && (
            <div ref={ref} className="profile-box">
              <NavLink to="/account">My Account</NavLink>
              <NavLink onClick={handleSignOut}> Sign Out</NavLink>
            </div>
          )}
        </div>
      </div>
    </S.AuthHeader>
  );
};

export default AuthHeader;
