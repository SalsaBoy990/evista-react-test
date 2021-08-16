import React from "react";

import "./Card.css";

class Card extends React.Component {
  cardClicked = () => {
    // if already matched, do not proceed
    if (this.props.card.matched === true) {
      return;
    }
    this.props.card.clicked = true;
    this.props.handleCardClicked(this.props.card, this.props.card.index);
  };

  render() {
    return (
      <div
        disabled={this.props.card.matched}
        onClick={this.cardClicked}
        className={this.props.card.matched ? "card card-matched" : "card"}
      >
        <img
          src={"/images/cards/" + this.props.card.image}
          alt={this.props.card.name}
          className={this.props.card.clicked ? "show" : "hide"}
        />
      </div>
    );
  }
}

export default Card;
