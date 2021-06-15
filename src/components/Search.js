import React from "react";


function Search(props) {

function handleSubmit(e) {
  e.preventDefault();
  props.searchValue(props.searchText);
}

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={props.searchText}
        onChange={(e) => props.setSearchText(e.target.value.toLowerCase())}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
