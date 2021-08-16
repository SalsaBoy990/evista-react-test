import React from "react";
import "purecss";
import "./App.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import numberOfPairs from "./data/numberOfPairs";
import cards from "./data/cards";

class App extends React.Component {
  state: {
    numberOfPairs: [],
    cards: {},
    currentTries: 0,
    currentNumberOfPairs: null,
    bestResult: null,
  };

  startGame = (pairs) => {
    let newCards = [];
    let keys = Object.keys(cards);

    for (let i = 0; i < pairs; i++) {
      let max = keys.length - 1;
      let randomIndex = this.randomIntegerInRange(0, max);

      console.log(randomIndex);
      let randomCardIndex = keys[randomIndex];
      keys.splice(randomIndex, 1);

      newCards.push(cards[randomCardIndex], cards[randomCardIndex]);
    }

    // randomize
    console.log(newCards.sort((a, b) => 0.5 - Math.random()));

    this.setState({
      cards: newCards,
    });
  };

  randomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  componentWillMount() {
    this.setState({
      numberOfPairs: numberOfPairs,
      cards: cards,
      currentTries: 0,
      currentNumberOfPairs: this.props.match.params.numberOfCards,
      bestResult: null,
    });

    this.startGame(this.props.match.params.numberOfCards);
  }

  restartGame = () => {
    this.startGame(this.state.currentNumberOfPairs);
  };

  render() {
    const page = "app";
    return (
      <>
        <Header
          page={page}
          numberOfPairs={this.state.numberOfPairs}
          currentNumberOfPairs={this.state.currentNumberOfPairs}
        ></Header>
        <main className="app-container">
          <div className="top-container">
            <div className="current-tries">
              Current tries: <span>{this.state.currentTries}</span>
            </div>
            <div className="best-result">
              Best: <br></br> <span>{this.state.bestResults}</span>
            </div>

            <button
              onClick={this.restartGame}
              className="pure-button restart-button"
            >
              Restart
            </button>
          </div>

          <div className="cards-container">
            {Object.keys(this.state.cards).map((key) => (
              <Card key={"card-" + key} card={this.state.cards[key]} />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default App;
