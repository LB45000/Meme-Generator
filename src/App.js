import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MemeDisplay from './MemeDisplay';
import CaptionInput from './CaptionInput';
import FavoriteMemes from './FavoriteMemes';

function App() {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [favoriteMemes, setFavoriteMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setMemes(data.data.memes);
    } catch (error) {
      console.error('Error fetching memes:', error);
    }
  };

  const handleCaptionChange = (position, text) => {
    if (position === 'top') {
      setTopText(text);
    } else if (position === 'bottom') {
      setBottomText(text);
    }
  };

  const handleMemeChange = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setCurrentMeme(memes[randomIndex]);
  };

  const addToFavorites = meme => {
    setFavoriteMemes(prevState => [...prevState, meme]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MemeDisplay
          meme={currentMeme}
          topText={topText}
          bottomText={bottomText}
          addToFavorites={addToFavorites}
        />
        <CaptionInput
          topText={topText}
          bottomText={bottomText}
          onCaptionChange={handleCaptionChange}
          onMemeChange={handleMemeChange}
        />
        <FavoriteMemes memes={favoriteMemes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
