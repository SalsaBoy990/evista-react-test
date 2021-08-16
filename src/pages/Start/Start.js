import React from "react";
import "./Start.css";

import Header from "../../components/Header/Header";

import numberOfPairs from "../../data/numberOfPairs";

class Start extends React.Component {
  inputPairs = React.createRef();

  enterGame = (event) => {
    event.preventDefault();

    const numberOfCards = this.inputPairs.current.value;

    // navigate to
    this.props.history.push(`/play/${numberOfCards}`);
  };

  render() {
    const title = "Splendex Memory Game";
    const page = "start";
    const cardPairs = numberOfPairs;

    return (
      <>
        <Header page={page}></Header>
        <main className="start-container">
          <h1 className="start-title">{title}</h1>
          <p className="start-deck-size-label">Deck Size</p>
          <form onSubmit={this.enterGame}>
            <select
              className="start-deck-size-select"
              name="deck-size"
              ref={this.inputPairs}
            >
              {cardPairs.map((number) => {
                return (
                  <option key={"pairs-" + number} value={number}>
                    {number}
                  </option>
                );
              })}
            </select>
            <button
              type="submit"
              className="pure-button start-pure-button-red"
              style={{ display: "block", margin: "0 auto" }}
            >
              Start New Game
            </button>
          </form>
        </main>
      </>
    );
  }
}

export default Start;
