import React, { useState, useRef } from "react";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    if (searchRef && searchRef.current && searchRef.current.value) {
      navigate(`/search?search=${searchRef.current.value}`);
    }
  };
  // const fetchSearchData = async () => {
  //   const response = await fetch(
  //     `https://api.jikan.moe/v4/anime?q=${search}&sfw`
  //   );
  //   const searchAPIdata = await response.json();
  //   console.log(searchAPIdata);
  //   dispatch(searchReducer(searchAPIdata));
  //   dispatch(loadingReducer(false));
  //   navigate("/search");
  // };
  // fetchSearchData();
  // console.log(searchDataList);
  return (
    <form onSubmit={onSearch}>
      <div className="search-bar">
        <input type="search" placeholder="search anime" ref={searchRef} />
      </div>
      <button type="submit" className="search-icon" to="/search">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
