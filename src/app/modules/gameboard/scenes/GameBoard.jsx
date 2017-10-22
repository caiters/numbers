import React from "react";
import { Component } from "react";
import Number from "./Number";
import { connect } from "react-redux";
import "./GameBoard.scss";
import LastClicked from "./LastClicked";
import NewGame from "./NewGame";

import { selectNumber, newGame } from "../gameBoardActions";

const mapStateToProps = state => state.gameBoard;
const mapDispatchToProps = {
  selectNumber,
  newGame
};

class GameBoard extends Component {
  onClick(number, index) {
    let { lastSelected } = this.props;
    if (number === lastSelected + 1) {
      this.props.selectNumber(index);
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
        <section className="gameboard" data-encoded={encoded}>
          {rows}
        </section>
        <LastClicked />
        <NewGame
          onClick={() => {
            console.log("here");
            this.newGame();
          }}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
