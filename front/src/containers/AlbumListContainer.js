import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AlbumList from '../components/AlbumList';

class AlbumListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      albums: []
    };
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    axios.get('/api/albums')
      .then(res => res.data)
      .then(albums => this.setState({ albums }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error, albums } = this.state;
    return (
      <Fragment>
        {
          error
          ? <div>{error.message}</div>
          : <AlbumList albums={albums} />
        }
      </Fragment>
    );
  }
}

export default AlbumListContainer;