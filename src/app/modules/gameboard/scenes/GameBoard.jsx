import React from "react";
import { Component } from "react";
import Number from "./Number";
import { connect } from "react-redux";
import { selectNumber } from "../gameBoardActions";
import "./GameBoard.scss";

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
          onClick={() => {
            this.onClick(number.number, index);
          }}
          index={index}
        />
      );
    });
    return (
      <section className="gameboard" data-encoded={encoded}>
        {rows}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
