import React from 'react';
import useFilter from './hooks/filter';
import './App.css';

function App() {
  const [filteredEmoji, filterEmoji] = useFilter();

  const handleSearchChange = (e) => {
    filterEmoji(e.target.value, 20);
  }

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
