import React from "react";
import Text from "./components/text";
import Heading from "./components/heading";
import Whitespace from "./components/whitespace";
import HideBlock from "./components/hideBlock";
import Picture from "./components/picture";

class App extends React.Component {
  render() {
    return (
      <div>
        <Heading />
        <Text />
        <Whitespace />
        <HideBlock />
        <Picture />
      </div>
    );
  }
}

export default App;
