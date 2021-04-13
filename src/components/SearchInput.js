import React from "react";
import "../styles/SearchInput.css";

function SearchInput({ textChange }) {
  const handleChange = (e) => {
    textChange(e);
  }

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  )
}

export default SearchInput;
