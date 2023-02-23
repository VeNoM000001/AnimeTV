import React, { useEffect, useState } from "react";
import "./trendingAnime.scss";
import { fetchData, trendingOptions } from "../../utils/fetchData";
import Loading from "../../components/loader/Loader";
import AllAnime from "../../components/allAnime/AllAnime";

const TrendingAnime = () => {
  const [trendingAnimeData, setTrendingAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTrendingAnimeData = async () => {
      const trendingData = await fetchData(
        "https://gogoanime2.p.rapidapi.com/popular",
        trendingOptions
      );
      console.log(trendingData);
      setTrendingAnimeData(trendingData);
      setIsLoading(false);
    };
    fetchTrendingAnimeData();
  }, []);

  console.log(trendingAnimeData);

  return (
    <section className="trending-section">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>Trending Anime</h1>
          <div className="anime-popular">
            {trendingAnimeData.map((item, index) => (
              <AllAnime item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingAnime;
