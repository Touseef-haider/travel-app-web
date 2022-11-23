import { LOGIN } from "../actionTypes";
const initialState = {
  loading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
