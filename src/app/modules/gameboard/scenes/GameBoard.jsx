import React from "react";
import { Component } from "react";
import Number from "./Number";
import { connect } from "react-redux";
import { selectNumber, newGame } from "../gameBoardActions";
import  NewGame  from "./NewGame";

const mapStateToProps = state => state.gameBoard;
const mapDispatchToProps = {
  selectNumber, newGame
};

class GameBoard extends Component {
  onClick(number, index) {
    let { lastSelected } = this.props;
    console.log({ number, lastSelected }, "outside");
    if (number === lastSelected + 1) {
      this.props.selectNumber(index);
    } else {
      console.log({ number, lastSelected });
    }
  }

  newGame() {
    this.props.newGame();
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
      );ß
    });
    return (
      <section className="gameboard" data-encoded={encoded}>
        {rows}
        <NewGame onClick={() => {
          console.log('here');
          this.newGame()
        }} />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
