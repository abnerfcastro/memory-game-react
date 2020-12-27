import "./Navbar.css"

const Navbar = ({ onNewGame, isLocked }) => {
  return (
    <header>
      <h2>
        <a href="/">Memory Game</a>
      </h2>
      <nav>
        {isLocked ? <li style={{ color: "red" }}>LOCKED</li> : null}
        <li>
          <button onClick={onNewGame}>New Game</button>
        </li>
      </nav>
    </header>
  )
}

export default Navbar
