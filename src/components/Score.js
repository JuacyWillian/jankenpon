import React, { Component } from "react";

import ScoreItem from "./ScoreItem";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  render() {
    return (
      <div className="scores">
        <ScoreItem label="User Score" points={this.props.user} />
        <ScoreItem label="Draw Score" points={this.props.draw} />
        <ScoreItem label="AI Score" points={this.props.ai} />
      </div>
    );
  }
}

export default Score;
