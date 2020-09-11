import React from "react";

class Hello extends Component {
  static defaultProps = {
    name: "noname",
  };

  render() {
    const { name, color, isSpecial } = this.props;
    return (
      <div style={{ color: color }}>
        {isSpecial && <b>*</b>}
        Hello {name}
      </div>
    );
  }
}

export default Hello;
