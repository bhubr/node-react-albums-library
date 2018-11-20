import React, { Component } from 'react';
import AlbumListContainer from './containers/AlbumListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumListContainer />
      </div>
    );
  }
}

export default App;
