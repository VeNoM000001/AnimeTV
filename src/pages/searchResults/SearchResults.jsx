import React, { useState, useEffect } from "react";
import "./SearchResults.scss";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AllAnime from "../../components/allAnime/AllAnime";
import Loading from "../../components/loader/Loader";
import { useDispatch } from "react-redux";
import { loadingReducer } from "../../redux/search/loadingSlice";

const SearchResults = () => {
  const { search } = useLocation();
  const animeName = new URLSearchParams(search).get("search");
  const [animeList, setAnimeList] = useState([]);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSearchData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${animeName}&sfw`
      );
      const searchAPIdata = await response.json();
      setAnimeList(searchAPIdata);
      dispatch(loadingReducer(false));
    };
    fetchSearchData();
  }, [animeName,dispatch]);

  return (
    <section className="search-section">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Search Results</h1>
          <div className="search-array">
            {animeList.data?.length
              ? animeList.data.map((item, index) => (
                  <AllAnime item={item} key={index} />
                ))
              : null}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
