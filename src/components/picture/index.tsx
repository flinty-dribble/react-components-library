import React from "react";

class Picture extends React.Component {
  state = {
    img: "https://safety-rest.ru/upload/iblock/638/uznayte-bolshe-o-frantsii.jpg",
  };

  render() {
    return <img src={this.state.img} width="400px"></img>;
  }
}

export default Picture;
