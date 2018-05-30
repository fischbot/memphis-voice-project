import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="search">
      <input
        className="form-control"
        type="search"
        placeholder="search upcoming events"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
