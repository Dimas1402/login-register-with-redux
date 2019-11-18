import React, { Component } from "react";
// import Disqus from "disqus-react";
import { DiscussionEmbed } from "disqus-react";


 class Disqus extends Component {
  render() {
    const disqusShortname = "disqus-orbfoqnos4"; //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://localhost:3004", //this.props.pageUrl
      identifier: "disqus-awiah.id", //this.props.uniqueId
      title: "Title of Your Article" //this.props.title
    };

    return (
      <div className="article-container">
        <h1>Comment</h1>

        

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

export default Disqus;