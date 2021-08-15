import React from "react";
import "./Start.css";

import Header from "../../components/Header/Header";

class Start extends React.Component {
  render() {
    const title = "Splendex Memory Game";

    const cardPairs = [3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <>
        <Header></Header>
        <main className="start-container">
          <h1 className="start-title">{title}</h1>
          <p className="start-deck-size-label">Deck Size</p>
          <select className="start-deck-size-select" name="deck-size">
            {cardPairs.map((number) => {
              return (
                <option key={"pairs-" + number} value={number}>
                  {number}
                </option>
              );
            })}
          </select>
          <button
            className="pure-button start-pure-button-red"
            style={{ display: "block", margin: "0 auto" }}
          >
            Start New Game
          </button>
        </main>
      </>
    );
  }
}

export default Start;