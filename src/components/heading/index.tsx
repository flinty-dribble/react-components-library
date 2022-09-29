import React from "react";

class Heading extends React.Component {
  state = {
    p: "LALA",
  };

  render() {
    return <h1>{this.state.p}</h1>;
  }
}

export default Heading;
