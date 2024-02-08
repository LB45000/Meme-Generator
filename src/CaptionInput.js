import React from 'react';

function CaptionInput({ topText, bottomText, onCaptionChange, onMemeChange }) {
  const handleInputChange = (position, event) => {
    const text = event.target.value;
    onCaptionChange(position, text);
  };

  return (
    <div className="caption-input">
      <input
        type="text"
        placeholder="Top Text"
        value={topText}
        onChange={e => handleInputChange('top', e)}
      />
      <input
        type="text"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={e => handleInputChange('bottom', e)}
      />
      <button onClick={onMemeChange}>Next Meme</button>
    </div>
  );
}

export default CaptionInput;
