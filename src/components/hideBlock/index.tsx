import React from "react";

class HideBlock extends React.Component {
  state = {
    hidden: false,
    par: "hide",
  };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.hide = this.hide.bind(this);
  }

  hide() {
    if (this.state.hidden === false) {
      this.setState({ hidden: true });
      this.setState({ par: "show" });
    } else {
      this.setState({ hidden: false });
      this.setState({ par: "hide" });
    }
  }

  render() {
    return (
      <>
        <p onClick={this.hide}>{this.state.par}</p>
        <p hidden={this.state.hidden}>very interesting information</p>
      </>
    );
  }
}

export default HideBlock;
