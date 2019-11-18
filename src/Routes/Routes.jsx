import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loginRegisterContainer from "../Container/loginRegister";
import Home from "../Components/Home/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={loginRegisterContainer} />
          <Route path="/home" component={Home} />
          <Route path="/menu1" component={Home} />
          <Route path="/menu2" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
