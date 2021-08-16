import React from "react";

import "./Header.css";
import evistaLogo from "./evista.png";

class Header extends React.Component {
  inputPairs = React.createRef();

  state = {
    currentNumberOfPairs: "",
  };

  componentDidMount() {
    this.setState({
      currentNumberOfPairs: this.props.currentNumberOfPairs,
    });
  }

  startGame = (event) => {
    event.preventDefault();

    const numberOfCards = this.inputPairs.current.value;
    this.props.startGame(numberOfCards);
  };

  handleChange = (event) => {
    this.setState({
      currentNumberOfPairs: event.target.value,
    });
  };

  render() {
    const deckSizes = this.props.deckSizes;
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
                ref={this.inputPairs}
                value={currentNumberOfPairs || ""}
                onChange={this.handleChange}
              >
                {deckSizes.map((number) => {
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
