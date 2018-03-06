import React from "react";

export default props => {
  return (
    <div id="user-score">
      <h4>{props.label}</h4>
      <p>{props.points}</p>
    </div>
  );
};
