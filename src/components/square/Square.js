import React from "react";

class Square extends React.Component {
  render() {
    const { position, value } = this.props;

    return (
      <button className="square" onClick={() => this.props.onClick(position)}>
        {value}
      </button>
    );
  }
}

export default Square;
