import React, { Component } from "react";

import Choice from "./Choice";
import DisplayGame from "./DisplayGame";

const CHOICE_LIST = ["rock", "scissor", "paper"];
const WINNER_TABLE = {
  paper_scissor: -1,
  rock_paper: -1,
  scissor_rock: -1,
  paper_rock: 1,
  scissor_paper: 1,
  rock_scissor: 1
};

function getWinner(user, ai) {
  if (user === ai) return "draw";
  return WINNER_TABLE[`${user}_${ai}`] >= 0 ? "user" : "ai";
}

function aiChoice() {
  return CHOICE_LIST[Math.floor(Math.random() * 3)];
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.playGame = this.playGame.bind(this);

    this.state = {
      ...props,
      winner: "",
      user: "",
      ai: ""
    };
  }

  playGame(user_choice) {
    let user = user_choice;
    let ai = aiChoice();
    let winner = getWinner(user, ai);

    this.setState({
      winner: winner,
      user: user,
      ai: ai
    });

    this.props.onMatchGame(winner);
  }

  render() {
    return (
      <div id="game">
        <div className="choices">
          <Choice id="rock" label="Rock" onUserChoose={this.playGame} />
          <Choice id="paper" label="Paper" onUserChoose={this.playGame} />
          <Choice id="scissor" label="Scissor" onUserChoose={this.playGame} />
        </div>
        <DisplayGame
          user={this.state.user}
          ai={this.state.ai}
          winner={this.state.winner}
        />
      </div>
    );
  }
}

export default Game;
