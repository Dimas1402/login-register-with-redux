import React from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Register from "./Register";
import "../../Styles/Loading.scss";

const loginRegisters = props => {
  return (
    <div className="container-fluid bg-loginRegister">
      {props.loginRegisterPage === false && props.isLoading ? (
        <div className="loader">
          <div className="atom-1"></div>
          <div className="atom-2"></div>
          <div className="atom-3"></div>
        </div>
      ) : props.loginRegisterPage === false ? (
        <Login {...props} />
      ) : props.loginRegisterPage === true ? (
        <Register {...props} />
      ) : (
        ""
      )}
    </div>
  );
};

loginRegisters.propTypes = {
  loginRegisterPage: PropTypes.bool,
  toggleLoginRegister: PropTypes.func
};

export default loginRegisters;
