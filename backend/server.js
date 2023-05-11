const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg');
require('dotenv').config();

// Add this near the top of your file, after creating your Express app
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '425222',
  port: 5432,
});

app.get('/api/highscores', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT player.username, ranking.score 
      FROM player 
      INNER JOIN ranking ON player.player_id = ranking.player_id 
      ORDER BY ranking.score DESC 
      LIMIT 10
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred, please try again' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
