import React from "react";
import Number from "../../../components/Number/Number";
import { connect } from "react-redux";

const mapStateToProps = state => state.gameBoard;
const mapDispatchToProps = dispatch => ({});

const GameBoard = () =>
  <section className="gameboard">
    <Number />
  </section>;

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
