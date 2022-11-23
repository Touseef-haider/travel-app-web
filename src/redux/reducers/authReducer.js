import { set } from "../../utils/storage";
import { LOGIN } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      set("token", action?.payload?.access_token);
      set("refreshToken", action?.payload?.refresh_token);
      return { ...state, loading: false, user: action?.payload };
    case LOGIN.REQUEST:
      return { ...state, loading: true };
    case LOGIN.ERROR:
      return { ...state, loading: false, error: action?.payload };
    case LOGIN.RESET:
      return { ...state, error: "" };

    default:
      return state;
  }
};

export default authReducer;
