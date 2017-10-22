import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import "./GameBoard.scss";

import Number from "./Number";
import LastClicked from "./LastClicked";

import { selectNumber } from "../gameBoardActions";

const mapStateToProps = state => state.gameBoard;
const mapDispatchToProps = {
  selectNumber
};

class GameBoard extends Component {
  onClick(number, index) {
    let { lastSelected } = this.props;
    if (number === lastSelected + 1) {
      this.props.selectNumber(index);
    }
  }
  render() {
    let { numbers, encoded } = this.props;
    let rows = numbers.map((number, index) => {
      return (
        <Number
          key={index}
          onClick={() => {
            this.onClick(number.number, index);
          }}
          index={index}
        />
      );
    });
    return (
      <div>
        <LastClicked />
        <section className="gameboard" data-encoded={encoded}>
          {rows}
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
