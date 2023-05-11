import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HighScores from './HighScores';

function App() {

  const handleStartGame = () => {
  }
  const handleHighScore = () => {

  }

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/highscores">
            <HighScores />
          </Route>
          <Route path="/">
            <div className="image-container">
              <img className="chess-image" src="img/chess1.png" alt="chess" />
            </div>
            <div className="menu-game">
              <h1 className="animate__animated animate__fadeIn chess-title">Chess</h1>
              <button className="startGame button animate__animated animate__fadeIn animate__delay-1s element-title" onClick={handleStartGame}>
                Start A New Game
              </button>
              <br />
              <Link className="highScore button animate__animated animate__fadeIn animate__delay-1s element-title" onClick={handleHighScore}>
                High Scores
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
