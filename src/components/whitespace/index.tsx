import React from "react";

class Whitespace extends React.Component {
  solvingErr = {
    line: <hr></hr>,
  };

  render() {
    return (
      <>
        <br></br>
        {this.solvingErr.line}
      </>
    );
  }
}

export default Whitespace;
