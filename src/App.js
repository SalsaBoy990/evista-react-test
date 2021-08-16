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
  };

  componentWillMount() {
    this.setState({
      numberOfPairs: numberOfPairs,
      cards: cards,
    });
  }

  render() {
    const page = "app";
    return (
      <>
        <Header page={page} numberOfPairs={this.state.numberOfPairs}></Header>
        <main className="app-container">
          <div className="top-container">
            <div className="current-tries">
              Current tries: <span>1</span>
            </div>
            <div className="best-result">
              Best: <br></br> <span> 9</span>
            </div>

            <button className="pure-button restart-button">Restart</button>
          </div>

          <div className="cards-container">
            {Object.keys(this.state.cards).map((key) => (
              <Card key={key} card={this.state.cards[key]} />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default App;
