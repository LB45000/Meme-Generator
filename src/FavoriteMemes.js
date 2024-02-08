import React from 'react';

function FavoriteMemes({ memes }) {
  return (
    <div className="favorite-memes">
      <h2>Favorite Memes</h2>
      {memes.map(meme => (
        <div key={meme.id}>
          <img src={meme.url} alt={meme.name} />
        </div>
      ))}
    </div>
  );
}

export default FavoriteMemes;

