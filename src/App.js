import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
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
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
}

export default App;
