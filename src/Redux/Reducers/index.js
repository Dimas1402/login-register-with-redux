import { combineReducers } from "redux";
import loginRegisterReducers from "./loginRegisterReducers";

export default combineReducers({
  loginRegister: loginRegisterReducers
});
