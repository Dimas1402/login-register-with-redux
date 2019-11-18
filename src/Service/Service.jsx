import {
  USER_LOGIN,
  USER_REGISTER,
  IS_LOADING,
  VALIDATION,
  SHOW_ALERT,
  HIDDEN_ALERT
} from "../Redux/Types";
import Axios from "axios";

//NOTE Login
export const handleSubmitLogin = e => dispatch => {
  dispatch({
    type: IS_LOADING
  });

  const name = e.name;
  const password = e.password;
  //NOTE API user Login
  Axios.post("https://aqueous-hollows-28311.herokuapp.com/login", {
    name,
    password
  })
    .then(res => {
      localStorage.setItem("token", res.data.access_token);
      dispatch({
        type: USER_LOGIN,
        payload: res.data
      });

      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: USER_LOGIN,
        isLoading: false
      });
      dispatch({
        type: VALIDATION,
        payload: "password salah"
      });
      setTimeout(() => {
        dispatch({
          type: VALIDATION,
          payload: ""
        });
      }, 5000);
    });
};

//NOTE Register
export const handleSubmitRegister = e => dispatch => {
  dispatch({
    type: IS_LOADING
  });
  const name = e.name;
  const email = e.email;
  const telp = e.telp;
  const password = e.password;
  //NOTE API User Register
  Axios.post("https://aqueous-hollows-28311.herokuapp.com/register", {
    name,
    email,
    telp,
    password
  })
    .then(res => {
      dispatch({
        type: USER_REGISTER
      });
      console.log(res);
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: USER_REGISTER,
        isLoading: false
      });
      dispatch({
        type: SHOW_ALERT,
        showAlert: true
      });
      setTimeout(() => {
        dispatch({
          type: HIDDEN_ALERT
        });
      }, 3000);
    });
};
