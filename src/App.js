import React, {useEffect} from 'react';
import UseFilter from './components/Filter';
import EmojiResults from './components/EmojiResults';
import './App.css';

function App() {
  const [filteredEmoji, filterEmoji] = UseFilter();

  const handleSearchChange = (e) => {
    filterEmoji(e.target.value, 20);
  }

  return (
    <div className="App">
      <EmojiResults emojiData={filteredEmoji} onChange = {handleSearchChange} />
    </div>
  );
}

export default App;
