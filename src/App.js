import React from "react";
import "purecss";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import deckSizes from "./data/sizes";
import cards from "./data/cards";
import { randomIntegerInRange } from "./helpers";

class App extends React.Component {
  state = {
    deckSizes: [],
    cards: [],
    currentTries: 0,
    currentNumberOfPairs: null,
    remainingNumberOfPairs: null,
    bestResult: null,
    cardSelected1: {},
    cardSelected2: {},
    selectedCardCount: 0,
  };

  // Initialize state for the first time
  componentDidMount() {
    const numberOfPairs = parseInt(this.props.match.params.numberOfCards);
    this.startGame(numberOfPairs);
  }

  componentDidUpdate() {
    if (this.state.selectedCardCount === 2) {
      this.compareCardsClicked();
    }
  }

  // Start game, initialize state
  startGame = (pairs) => {
    let newCards = [];
    let keys = Object.keys(cards);

    for (let i = 0, j = 0; i < pairs; i++, j++) {
      let max = keys.length - 1;
      let randomIndex = randomIntegerInRange(0, max);
      let randomCardIndex = keys[randomIndex];
      // remove already selected key to avoid duplicate pairs
      keys.splice(randomIndex, 1);

      // it needs to be cloned, index changed to avoid pushing as a reference
      let card = { ...cards[randomCardIndex] };
      card.index = j++;
      newCards.push(card);
      let card2 = { ...cards[randomCardIndex] };
      card2.index = j;
      newCards.push(card2);
    }

    // Simple randomizing array
    newCards = newCards.sort((a, b) => 0.5 - Math.random());

    this.setState({
      deckSizes: deckSizes,
      cards: newCards,
      currentTries: 0,
      currentNumberOfPairs: pairs,
      remainingNumberOfPairs: pairs,
      bestResult: null,
      cardSelected1: {},
      cardSelected2: {},
      selectedCardCount: 0,
    });
  };

  // Restarting game (button)
  restartGame = () => {
    this.startGame(this.state.currentNumberOfPairs);
  };

  // Get card data from child card component (for matching cards)
  handleCardClicked = (cardData) => {
    let count = this.state.selectedCardCount;

    // If this is the first click
    if (count === 0) {
      this.setState({
        cardSelected1: cardData,
        selectedCardCount: count + 1,
      });

      // Second click
    } else if (count === 1) {
      this.setState({
        cardSelected2: cardData,
        selectedCardCount: count + 1,
      });
    }
  };

  compareCardsClicked = () => {
    const cardName1 = this.state.cardSelected1.name;
    const cardName2 = this.state.cardSelected2.name;

    const index1 = this.state.cardSelected1.index;
    const index2 = this.state.cardSelected2.index;

    const tries = this.state.currentTries + 1;
    const remaining = this.state.remainingNumberOfPairs - 1;

    const bestResult = this.state.bestResult;

    // check if there is a match
    if (cardName1 === cardName2) {
      let cards = this.state.cards;

      // find by index property
      cards.find((x) => x.index === index1).matched = true;
      cards.find((x) => x.index === index2).matched = true;

      this.setState({
        cards: cards,
        selectedCardCount: 0,
        cardSelected1: {},
        cardSelected2: {},
        currentTries: tries,
        remainingNumberOfPairs: remaining,
      });
    } else {
      setTimeout(() => {
        let cards = this.state.cards;
        for (let i = 0; i < cards.length; i++) {
          cards[i].clicked = false;
        }

        this.setState({
          selectedCardCount: 0,
          cardSelected1: {},
          cardSelected2: {},
          currentTries: tries,
        });
      }, 1000);
    }

    if (remaining === 0) {
      if (bestResult) {
        this.setState({
          bestResult: tries <= bestResult ? tries : bestResult,
        });
      } else {
        this.setState({
          bestResult: tries,
        });
      }

      setTimeout(() => {
        alert("Congratulations! Game is finished!");
      }, 1000);
    }
  };

  render() {
    const page = "app";

    return (
      <>
        <Header
          page={page}
          deckSizes={this.state.deckSizes}
          startGame={this.startGame}
          currentNumberOfPairs={this.state.currentNumberOfPairs}
        ></Header>
        <main className="app-container">
          <div className="top-container">
            <div className="current-tries">
              Current tries: <span>{this.state.currentTries}</span>
            </div>
            <div className="best-result">
              Best: <br></br> <span>{this.state.bestResult}</span>
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
              <Card
                key={"card-" + key}
                card={this.state.cards[key]}
                handleCardClicked={this.handleCardClicked}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default App;
