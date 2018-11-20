import React, { Component } from 'react';
import './App.css';
import AlbumItem from './components/AlbumItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumItem
          title="Born and Raised"
          artist="John Mayer"
          year="2012"
          image="https://images-na.ssl-images-amazon.com/images/I/91N8H1emDeL._SX355_.jpg"
        />
      </div>
    );
  }
}

export default App;
