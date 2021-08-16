import React from "react";
import "./Start.css";
import Header from "../../components/Header/Header";
import deckSizes from "../../data/sizes";

class Start extends React.Component {
  inputPairs = React.createRef();

  enterGame = (event) => {
    event.preventDefault();

    // delete local storage, we want a new game
    localStorage.setItem("state", null);
    const numberOfCards = this.inputPairs.current.value;
    // navigate to
    this.props.history.push(`/play/${numberOfCards}`);
  };

  render() {
    const title = "Splendex Memory Game";
    const page = "start";

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
              className="pure-button start-pure-button-red"
              style={{ display: "block", margin: "0 auto" }}
            >
              Start New Game
            </button>
          </form>

          <h2 style={{ color: "gray" }}>Card-matching game rules</h2>
          <ul style={{ color: "gray" }}>
            <li>Present the user with an even number of cards, “face down”.</li>
            <li>
              When the user clicks a card, “flip it over” and reveal the hidden
              image.
            </li>
            <li>When two cards are revealed:</li>
            <li>If the cards are identical, they are removed from play.</li>
            <li>If they are not, they will flip back.</li>
            <li>The game ends when all the cards are removed.</li>
          </ul>
        </main>
      </>
    );
  }
}

export default Start;
