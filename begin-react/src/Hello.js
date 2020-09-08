import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}
      Hello {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "noname",
};
export default Hello;
