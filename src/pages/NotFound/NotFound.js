import React from "react";
import "./NotFound.css";

import Header from "../../components/Header/Header";

class NotFound extends React.Component {
  render() {
    const title = "Page Not Found";
    return (
      <>
        <Header></Header>
        <main className="not-found-container">
          <h1 className="not-found-title">{title}</h1>
        </main>
      </>
    );
  }
}

export default NotFound;
