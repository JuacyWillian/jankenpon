import React from "react";

export default props => {
  return (
    <div id="display-game">
      <p>
        {`${props.user || "user"} x ${props.ai || "ai"} = ${props[
          props.winner
        ] || "draw"}`}
      </p>
    </div>
  );
};
