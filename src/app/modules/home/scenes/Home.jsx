import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import GameBoard from "../../gameboard/scenes/GameBoard";
import NewGame from "../../gameboard/scenes/NewGame"

import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="home__content">
          <h1 className="home__heading">Numbers Clicky</h1>
          <p>How fast can you click 1-10?</p>
          <GameBoard />
          <NewGame />
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    ownProps
  };
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
