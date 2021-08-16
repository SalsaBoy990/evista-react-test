import React from "react";

import "./Header.css";
import evistaLogo from "./evista.png";

class Header extends React.Component {
  render() {
    const numberOfPairs = this.props.numberOfPairs;

    return (
      <header className="header">
        <img className="header-logo" src={evistaLogo} alt="Evista logo" />

        {this.props.page === "app" && (
          <div className="header-controls">
            <span>Deck size: </span>

            <select
              className="header-deck-size-select"
              name="numberOfPairs"
              id=""
            >
              {numberOfPairs.map((number) => {
                return (
                  <option key={"pairs-" + number} value={number}>
                    {number}
                  </option>
                );
              })}
            </select>

            <button className="pure-button header-pure-button-red">
              Start New Game
            </button>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
