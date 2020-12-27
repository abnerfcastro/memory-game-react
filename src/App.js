import { Component } from "react"

import Navbar from "./Navbar"
import Card from "./Card"

import shuffle from "shuffle-array"

import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props)

    let cards = [
      { id: 0, backgroundColor: "red" },
      { id: 1, backgroundColor: "red" },
      { id: 2, backgroundColor: "navy" },
      { id: 3, backgroundColor: "navy" },
      { id: 4, backgroundColor: "green" },
      { id: 5, backgroundColor: "green" },
      { id: 6, backgroundColor: "yellow" },
      { id: 7, backgroundColor: "yellow" },
      { id: 8, backgroundColor: "black" },
      { id: 9, backgroundColor: "black" },
      { id: 10, backgroundColor: "purple" },
      { id: 11, backgroundColor: "purple" },
      { id: 12, backgroundColor: "pink" },
      { id: 13, backgroundColor: "pink" },
      { id: 14, backgroundColor: "lightskyblue" },
      { id: 15, backgroundColor: "lightskyblue" },
    ]

    cards = shuffle(cards)

    this.state = { cards }
  }

  render() {
    const cards = this.state.cards.map((c) => (
      <Card key={c.id} backgroundColor={c.backgroundColor} />
    ))
    return (
      <div className="App">
        <Navbar />
        {cards}
      </div>
    )
  }
}
