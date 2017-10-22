import React from "react";
import Number from "../../../components/Number/Number";
import { connect } from "react-redux";

const mapStateToProps = state => state.gameBoard;
const mapDispatchToProps = dispatch => ({});

const GameBoard = ({ numbers, encoded }) => {
  let rows = numbers.map(function(number, index) {
    return <Number number={number} index={index} />;
  });
  return (
    <section className="gameboard" data-encoded={encoded}>
      {rows}
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
