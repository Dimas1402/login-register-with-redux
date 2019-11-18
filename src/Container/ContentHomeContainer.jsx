import React from "react";
import ContentHome from "../Components/Home/Content/contentHome";
import marked from "marked";

class ContentHomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: "",
      showList: "list"
    };
  }

  componentDidMount() {
    const readmePath = require("../Artikel/Artikel.md");

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        });
      });
  }

  showList = () => {
    if (this.state.showList === "list") {
      this.setState({
        showList: "show-list"
      });
    }
    if (this.state.showList === "show-list") {
      this.setState({
        showList: "list"
      });
    }
   
  };

  render() {
    const { markdown } = this.state;
    return (
      <ContentHome
        markdown={markdown}
        showList={this.showList}
        stateShowList={this.state.showList}
      />
    );
  }
}

export default ContentHomeContainer;
