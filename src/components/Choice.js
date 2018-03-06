import React from "react";

export default props => {
  return (
    <div id="props.id">
      <h2>{props.label}</h2>
      <img
        src={`assets/img/${props.id}.jpg`}
        alt=""
        onClick={e => props.onUserChoose(props.id)}
      />
    </div>
  );
};
