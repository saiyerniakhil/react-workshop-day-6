import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.colorPalette = ["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d"];
  }

  componentDidMount() {
    document.getElementById("message").innerHTML = "Component is Mounted";
  }

  componentDidUpdate() {
    document.getElementById("message").innerHTML = "Component in Updated";
    document.getElementById("App").style.backgroundColor =
      this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 10) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <div id="App">
        <h1 id="message"></h1>
        <span>
          <h1>{this.state.count}</h1>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
        </span>
      </div>
    );
  }
}

export default App;
