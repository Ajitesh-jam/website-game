const express = require('express');
const path = require('path');
const app = express();

// Serve the build directory
app.use(express.static(path.join(__dirname, 'Build')));

// Serve the index.html file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
