import React from 'react';

function MemeDisplay({ meme, topText, bottomText, addToFavorites }) {
  const handleAddToFavorites = () => {
    addToFavorites(meme);
  };

  return (
    <div className="meme-display">
      {meme && (
        <div>
          <img src={meme.url} alt={meme.name} />
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
      )}
      <div className="top-caption">{topText}</div>
      <div className="bottom-caption">{bottomText}</div>
    </div>
  );
}

export default MemeDisplay;
