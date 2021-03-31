// src/App.js kopija vjezbe ex08 Day22
import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    // add this line
    characters: [
      // add this line
      {
        firstName: "Lary",
        lastName: "Page",
      },
      {
        firstName: "Ada",
        lastName: "Lovelace",
      },
      {
        firstName: "Alan",
        lastName: "Turing",
      },
    ],
  }; // kraj state-a

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  }; //kraj removeCharacter

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
