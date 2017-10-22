import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import reactJsLogo from "../../../resources/assets/images/react.svg";
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
          <a href="#" className="home__logo-link">
            <img
              className="home__logo-img"
              src={reactJsLogo}
              alt="React Logo"
            />
          </a>
          <h1 className="home__heading">Numbers Clicky</h1>
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
