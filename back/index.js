const express = require('express');

const app = express();

const albums = [
  {
    id: 1,
    title: 'Born and Raised',
    artist: 'John Mayer',
    year: '2012',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91N8H1emDeL._SX355_.jpg'
  }
];

app.get('/api/albums', (req, res) => {
  res.json(albums);
});

app.listen(8000);