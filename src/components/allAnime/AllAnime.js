import React from "react";
import "./AllAnime.scss";
import { useDispatch } from "react-redux";
import { listReducer } from "../../redux/yourList/ListSlice";

const AllAnime = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(listReducer(listArray));
  };
  const listArray = {
    animeImage: item.animeImg ? item.animeImg : item.images.jpg.large_image_url,
    animeName: item.animeTitle ? item.animeTitle : item.title,
  };

  return (
    <section>
      <img
        src={item.animeImg ? item.animeImg : item.images.jpg.large_image_url}
        alt=""
      />
      <button onClick={clickHandler}>+</button>
      <h2>{item.animeTitle ? item.animeTitle : item.title}</h2>
      {item.episodeNum ? <p>Episode Number : {item.episodeNum}</p> : null}
      {item.releasedDate ? <p>Released date : {item.releasedDate}</p> : null}
      {item.episodes ? <p>Number of episodes : {item.episodes}</p> : null}
    </section>
  );
};

export default AllAnime;
