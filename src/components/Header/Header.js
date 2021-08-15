import React from "react";
import "./Header.css";
import evistaLogo from "./evista.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={evistaLogo} alt="Evista logo" />
      </header>
    );
  }
}

export default Header;
