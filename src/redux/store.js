import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const devTool =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTool)
);

export default store;
