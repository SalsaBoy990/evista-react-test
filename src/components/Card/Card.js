import React from "react";

import "./Card.css";

class Card extends React.Component {
  state = {
    clicked: false,
  };

  cardClicked = () => {
    const clicked = this.state.clicked ? false : true;
    this.setState({
      clicked,
    });
  };

  render() {
    return (
      <div
        onClick={this.cardClicked}
        className={this.props.card.matched ? "card card-matched" : "card"}
      >
        <img
          src={"/images/cards/" + this.props.card.image}
          alt={this.props.card.name}
          className={this.state.clicked ? "show" : "hide"}
        />
      </div>
    );
  }
}

export default Card;
