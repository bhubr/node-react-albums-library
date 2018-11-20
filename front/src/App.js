import React, { Component } from 'react';
import AlbumList from './components/AlbumList';
import './App.css';

const albums = [
  {
    title: 'Born and Raised',
    artist: 'John Mayer',
    year: '2012',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91N8H1emDeL._SX355_.jpg'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumList albums={albums} />
      </div>
    );
  }
}

export default App;
