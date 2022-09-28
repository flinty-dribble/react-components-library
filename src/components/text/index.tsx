import React from "react";

class Text extends React.Component {
  state = {
    p: "this is my first react app",
  };

  render() {
    return <p>{this.state.p}</p>;
  }
}

export default Text;
