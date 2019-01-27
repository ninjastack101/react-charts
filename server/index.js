const express = require('express');
const path = require('path');
const serverConfig = require('../config/server');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/:slug', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

const port = process.env.PORT || serverConfig.PORT;
app.listen(port, () => {
  console.log(`Listening on =====>>>> ${port}`);
});
