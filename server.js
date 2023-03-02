const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Define API routes here
app.get('/api/sample', (req, res) => {
    res.json({ message: 'This is a sample API response' });
  });  

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
