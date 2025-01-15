const express = require('express');
const { resolve } = require('path');
//require('dotenv').config();  // Load environment variables from .env

const app = express();
const port = 3010;

// console.log(`API Key: ${process.env.API_KEY}`);
// console.log(`Server Secret: ${process.env.SERVER_SECRET}`);

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
