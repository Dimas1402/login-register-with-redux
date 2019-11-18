import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import "../../Styles/Home.scss"
import ContentHomeContainer from "../../Container/ContentHomeContainer";

class Home extends React.Component {
  render() {
   

    if (!localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid home">
        <Navbar/>
     <ContentHomeContainer/>
      </div>
    );
  }
}

export default Home;
