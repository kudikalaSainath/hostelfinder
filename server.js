const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get hostel data (mocked for now)
app.get('/api/hostels', (req, res) => {
  // Mock data, you need to replace it with actual data from Google Maps or other sources
  res.json([
    { id: 1, name: 'Hostel A', gender: 'Boys', location: 'Hyderabad', contact: '1234567890' },
    { id: 2, name: 'Hostel B', gender: 'Girls', location: 'Secunderabad', contact: '0987654321' }
  ]);
});

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
