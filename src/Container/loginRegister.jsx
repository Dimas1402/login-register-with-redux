import React from "react";
import LoginRegister from "../Components/Login Register/LoginRegister";
import { connect } from "react-redux";
import { handleChanges } from "../Redux/Actions/loginRegisterAction";
import { handleSubmitLogin, handleSubmitRegister } from "../Service/Service";
import { Redirect } from "react-router-dom";

class loginRegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      password: "",
      telp: "",
      email: "",
      showPassword: true
    };
  }

  //NOTE change Login to Register
  toggleLoginRegister = () => {
    if (this.state.show === false) {
      this.setState({
        show: true,
        name: "",
        password: "",
        telp: "",
        email: ""
      });
    }
    if (this.state.show === true) {
      this.setState({
        show: false
      });
    }
  };

  //NOTE input function
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //NOTE the function of sending state login
  handleSubmitLogin = e => {
    e.preventDefault();

    this.props.handleSubmitLogin({
      name: this.state.name,
      password: this.state.password
    });
  };

  //NOTE function of sending state register
  handleSubmitRegister = e => {
    e.preventDefault();

    this.props.handleSubmitRegister({
      name: this.state.name,
      email: this.state.email,
      telp: this.state.telp,
      password: this.state.password
    });
  };

  //NOTE show password
  changeShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />;
    }

    return (
      <>
        {console.log(this.state.showPassword)}
        <LoginRegister
          //NOTE props show login and register
          loginRegisterPage={this.state.show}
          toggleLoginRegister={this.toggleLoginRegister}
          //NOTE props state
          stateName={this.state.name}
          statePassword={this.state.password}
          stateEmail={this.state.email}
          stateTelp={this.state.telp}
          //NOTE props function Login and Register
          handleChange={this.handleChange}
          handleSubmitLogin={this.handleSubmitLogin}
          handleSubmitRegister={this.handleSubmitRegister}
          passwordErr={this.props.validation}
          isLoading={this.props.isLoading}
          showAlert={this.props.showAlert}
          stateShowPassword={this.state.showPassword}
          changeShowPassword={this.changeShowPassword}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.loginRegister,
    password: state.loginRegister,
    telp: state.loginRegister,
    email: state.loginRegister,
    isLoading: state.loginRegister.isLoading,
    validation: state.loginRegister.validation,
    showAlert: state.loginRegister.showAlert
  };
};
export default connect(
  mapStateToProps,
  { handleChanges, handleSubmitLogin, handleSubmitRegister }
)(loginRegisterContainer);
