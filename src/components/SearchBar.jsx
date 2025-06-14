import React from 'react';


function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="d-flex flex-grow-1 me-3 product-search-form"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        className="form-control form-control-lg product-search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="btn btn-warning product-search-btn"
        type="submit"
        aria-label="Search"
      >
        <i className="bi bi-search fs-5"></i>
      </button>
    </form>
  );
}

export default SearchBar;
