import React from "react";
import logoPP from "../../Asset/logoPP.png";
import "../../Styles/Register.scss";
import PropTypes from "prop-types";
import AlertRegister from "../Alerts/alertRegister";

const Register = props => {
  return (
    <div className="col box-register animated fadeIn">
      {props.showAlert === true ? <AlertRegister /> : ""}
      <div className="text-center">
        <img src={logoPP} alt="" />
      </div>
      <form onSubmit={props.handleSubmitRegister}>
        <div className="wrapper-register">
          <input
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.stateName}
            autoComplete="off"
            required
          />
          <label for="Username">
            <span>Username</span>
          </label>
        </div>
        <div className="wrapper-register2">
          <input
            type="email"
            name="email"
            onChange={props.handleChange}
            value={props.stateEmail}
            autoComplete="off"
            required
          />
          <label for="email">
            <span>Email</span>
          </label>
        </div>
        <div className="wrapper-register3">
          <input
            type="number"
            name="telp"
            onChange={props.handleChange}
            value={props.stateTelp}
            autoComplete="off"
            required
          />
          <label for="telp">
            <span>No Telepon</span>
          </label>
        </div>

        <div className="wrapper-register4">
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
        <button
          type="submit"
          className="btn btn-outline-success"
          disabled={props.isLoading}
        >
          {props.isLoading ? "loading..." : "Register"}
        </button>
      </form>
      <p onClick={props.toggleLoginRegister}>Sudah punya akun?</p>
    </div>
  );
};

Register.propTypes = {
  handleChange: PropTypes.func,
  stateEmail: PropTypes.string,
  stateTelp: PropTypes.string,
  StateName: PropTypes.string,
  statePassword: PropTypes.string
};
export default Register;
