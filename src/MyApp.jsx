import React from "react";
import Color from "./color"; // Ensure that Color component is imported correctly

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      colorNum: 400,
      colors: [],
    };
  }

  componentDidMount() {
    const colors = [];
    for (let i = 0; i < this.state.colorNum; i++) {
      colors.push({ hexCode: this.generateColor() });
    }
    this.setState({ colors });
  }

  //generateColor
  generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  updateColor(index) {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index].hexCode = currentColor;
    this.setState({
      colors: colors,
    });
  }

  render() {
    return (
      <div className="color-container">
        {this.state.colors.map((color, index) => (
          <Color
            key={`color-${index}`}
            index={index}
            update={this.updateColor.bind(this)}
            hexCode={color.hexCode}
          />
        ))}
      </div>
    );
  }
}

export default MyApp;