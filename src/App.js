import { Component } from "react"

import Navbar from "./Navbar"
import Card from "./Card"

import shuffle from "shuffle-array"

import "./App.css"

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2,
}

export default class App extends Component {
  constructor(props) {
    super(props)

    let cards = [
      { id: 0, cardState: CardState.HIDING, backgroundColor: "red" },
      { id: 1, cardState: CardState.HIDING, backgroundColor: "red" },
      { id: 2, cardState: CardState.HIDING, backgroundColor: "navy" },
      { id: 3, cardState: CardState.HIDING, backgroundColor: "navy" },
      { id: 4, cardState: CardState.HIDING, backgroundColor: "green" },
      { id: 5, cardState: CardState.HIDING, backgroundColor: "green" },
      { id: 6, cardState: CardState.HIDING, backgroundColor: "yellow" },
      { id: 7, cardState: CardState.HIDING, backgroundColor: "yellow" },
      { id: 8, cardState: CardState.HIDING, backgroundColor: "black" },
      { id: 9, cardState: CardState.HIDING, backgroundColor: "black" },
      { id: 10, cardState: CardState.HIDING, backgroundColor: "purple" },
      { id: 11, cardState: CardState.HIDING, backgroundColor: "purple" },
      { id: 12, cardState: CardState.HIDING, backgroundColor: "pink" },
      { id: 13, cardState: CardState.HIDING, backgroundColor: "pink" },
      { id: 14, cardState: CardState.HIDING, backgroundColor: "lightskyblue" },
      { id: 15, cardState: CardState.HIDING, backgroundColor: "lightskyblue" },
    ]

    cards = shuffle(cards)

    this.state = { cards, secondClick: false, canClick: true }

    this.handleNewGame = this.handleNewGame.bind(this)
  }

  handleCardClick(id) {
    if (this.state.canClick === false) return

    const cards = [...this.state.cards]
    const card = cards.find((c) => c.id === id)

    if (!card || card.cardState === CardState.SHOWING) return

    card.cardState = CardState.SHOWING

    if (this.state.secondClick) {
      this.setState({ cards, secondClick: false, canClick: false }, () => {
        setTimeout(() => {
          const selectedBackgroundColor = card.backgroundColor
          const matchingCandidates = cards.filter((c) => c.cardState === CardState.SHOWING)
          const isMatch = matchingCandidates.every((e) => e.backgroundColor === selectedBackgroundColor)
          matchingCandidates.forEach((elem) => (elem.cardState = isMatch ? CardState.MATCHING : CardState.HIDING))
          this.setState({ cards, canClick: true })
        }, 1000)
      })
      return
    }

    this.setState({ cards, secondClick: true })
  }

  handleNewGame() {
    let cards = this.state.cards.map((card) => ({ ...card, cardState: CardState.HIDING }))
    cards = shuffle(cards)
    this.setState({ cards, secondClick: false, canClick: true })
  }

  render() {
    const cards = this.state.cards.map((c) => (
      <Card
        key={c.id}
        showing={c.cardState !== CardState.HIDING}
        backgroundColor={c.backgroundColor}
        onClick={() => this.handleCardClick(c.id)}
      />
    ))
    return (
      <div className="App">
        <Navbar onNewGame={this.handleNewGame} isLocked={this.state.canClick === false} />
        {cards}
      </div>
    )
  }
}
