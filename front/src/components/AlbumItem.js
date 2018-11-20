import React from 'react';

const AlbumItem = ({ title, year, artist, image }) => (
  <div className="AlbumItem">
    <img alt={title} src={image} />
    <div>
      <h3>{title}</h3>
      <h4>{artist} - {year}</h4>
    </div>
  </div>
);

export default AlbumItem;
