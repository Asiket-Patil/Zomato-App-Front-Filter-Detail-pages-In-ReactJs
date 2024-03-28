import React from 'react';

const SearchBar = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className="logo my-5">e!</p>
      <p className="fw-bold fs-3 mb-5 text-white text">Find the best restaurants, cafés, and bars</p>
      <section className="d-flex justify-content-between mb-5 search">
        <input
          className="input p-2 location"
          type="text"
          placeholder="Please type a location"
        />
        <section className="restaurant">
          <span className="text-black m-3">
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </span>
          <input
            className="input p-2"
            type="text"
            placeholder="Search for restaurants"
          />
        </section>
      </section>
    </div>
  );
};

export default SearchBar;
