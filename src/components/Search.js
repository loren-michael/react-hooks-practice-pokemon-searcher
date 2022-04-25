import React from "react";

function Search({ search, onSearchChange, setSearch }) {

  // function handleSearch(e) {
  //   onSearchChange(e.target.value)
  // };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => setSearch(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
