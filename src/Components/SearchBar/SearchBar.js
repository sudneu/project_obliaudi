import React from 'react';

import Input from '../../UIComponents/Input/Input';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-field">
      <Input writtenText="What are you reading?"/>
      <button>Search</button>
    </div>
  )
}

export default SearchBar;
