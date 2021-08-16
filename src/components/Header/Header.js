import React from "react";

import "./Header.css";
import evistaLogo from "./evista.png";

class Header extends React.Component {
  state = {
    currentNumberOfPairs: "",
  };

  componentDidMount() {
    this.setState({
      currentNumberOfPairs: this.props.currentNumberOfPairs,
    });
  }

  startGame = () => {};

  handleChange = (event) => {
    this.setState({
      currentNumberOfPairs: event.target.value,
    });
  };

  render() {
    const numberOfPairs = this.props.numberOfPairs;
    const currentNumberOfPairs = this.state.currentNumberOfPairs;

    return (
      <header className="header">
        <img className="header-logo" src={evistaLogo} alt="Evista logo" />

        {this.props.page === "app" && (
          <div className="header-controls">
            <form action="" onSubmit={this.startGame}>
              <span>Deck size: </span>

              <select
                className="header-deck-size-select"
                name="numberOfPairs"
                id=""
                value={currentNumberOfPairs}
                onChange={this.handleChange}
              >
                {numberOfPairs.map((number) => {
                  return (
                    <option key={"pairs-" + number} value={number}>
                      {number}
                    </option>
                  );
                })}
              </select>

              <button
                type="submit"
                className="pure-button header-pure-button-red"
              >
                Start New Game
              </button>
            </form>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
