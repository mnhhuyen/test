import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HighScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getHighScores = async () => {
      const response = await axios.get('/api/highscores');
      setScores(response.data);
    };

    getHighScores();
  }, []);

  return (
    <div>
      <h1>High Scores</h1>
      {scores.map((score, index) => (
        <div key={index}>
          <h2>{score.username}</h2>
          <p>{score.score}</p>
        </div>
      ))}
    </div>
  );
}

export default HighScores;