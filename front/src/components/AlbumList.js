import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums }) => (
  <div className="AlbumList">
    {
      albums.map((album, index) => (
        <AlbumItem
          key={index}
          {...album}
        />
      ))
    }
  </div>
);

export default AlbumList;
