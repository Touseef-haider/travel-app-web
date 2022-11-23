import { LOGIN } from "./index";
export const Login = () => {
  return {
    type: LOGIN,
    payload: {
      full_name: "Touseef",
    },
  };
};
