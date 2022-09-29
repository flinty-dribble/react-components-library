import React from "react";
import Text from "./components/text";
import Heading from "./components/heading";
import Whitespace from "./components/whitespace";
import HideBlock from "./components/hideBlock";
import Picture from "./components/picture";

class App extends React.Component {
  solvingErr = {
    head: <Heading />,
  };

  render() {
    return (
      <div>
        {this.solvingErr.head}
        <Text />
        <Whitespace />
        <HideBlock />
        <Picture />
      </div>
    );
  }
}

export default App;
