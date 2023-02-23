import React, { useEffect, useState } from "react";
import "./Home.scss";
import { fetchData, animeOptions } from "../../utils/fetchData";
import Search from "../../components/search/Search.jsx";
import AllAnime from "../../components/allAnime/AllAnime";
import Loading from "../../components/loader/Loader";

const Home = () => {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAnimeData = async () => {
      const animeData = await fetchData(
        "https://gogoanime2.p.rapidapi.com/recent-release",
        animeOptions
      );
      setAnime(animeData);
      setIsLoading(false);
    };
    fetchAnimeData();
  }, []);
  return (
    <section className="home">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <h1 className="section-home-header">
              " Those who forgive themselves, and are able to accept their true
              nature… <br /> They are the strong ones! "
            </h1>
            <h1>-Itachi Uchiha</h1>
          </div>
          <Search />
          <div className="home-container">
            <h1 className="home-header">Explore Recent Releases</h1>
            <div className="anime-recent">
              {anime.map((item, index) => (
                <AllAnime item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
