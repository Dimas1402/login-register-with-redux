import React from "react";
import logoPP from "../../Asset/logoPP.png";
import "../../Styles/Login.scss";
import PropTypes from "prop-types";

const Login = props => {
  return (
    <div className="col box-login">
      <div className="text-center">
        <img src={logoPP} alt="" />
      </div>
      <form onSubmit={props.handleSubmitLogin}>
        <div className="wrapper">
          <input
            type="text"
            onChange={props.handleChange}
            name="name"
            value={props.stateName}
            autoComplete="off"
            required
          />
          <label for="name">
            <span>Username</span>
          </label>
        </div>
        <div className="wrapper2">
          <input
            type={props.stateShowPassword ? "password" : "text"}
            name="password"
            onChange={props.handleChange}
            value={props.statePassword}
            autoComplete="off"
            required
          />

          <label for="password">
            <span>Password</span>
          </label>
          <i
            onClick={props.changeShowPassword}
            style={{ cursor: "pointer", zIndex: "999" }}
            className={
              props.stateShowPassword ? "fas fa-eye-slash" : "fas fa-eye "
            }
          ></i>
        </div>
        <div className="passwordErr">
          <p>{props.passwordErr}</p>
        </div>

        <button type="submit" className="btn btn-outline-success">
          Login
        </button>
      </form>
      <p onClick={props.toggleLoginRegister}>Belum punya akun?</p>
    </div>
  );
};

Login.propTypes = {
  handleSubmitLogin: PropTypes.func,
  handleChange: PropTypes.func,
  StateName: PropTypes.string,
  statePassword: PropTypes.string,
  passwordErr: PropTypes.string
};

export default Login;
