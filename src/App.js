import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Title from "./components/Title";
import Game from "./components/Game";
import Score from "./components/Score";

class App extends Component {
  constructor(props) {
    super(props);
    this.setWinner = this.setWinner.bind(this);

    this.state = {
      user: 0,
      draw: 0,
      ai: 0
    };
  }

  setWinner(winner) {
    let state = { ...this.state };
    state[winner] += 1;
    this.setState({ ...state });
  }

  render() {
    return (
      <div id="container">
        <Title />
        <Game onMatchGame={this.setWinner} />
        <Score
          user={this.state.user}
          draw={this.state.draw}
          ai={this.state.ai}
        />
      </div>
    );
  }
}

export default App;
