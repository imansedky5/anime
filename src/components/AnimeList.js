import React, { useState, useEffect } from "react";

import Card from "./Card";

const AnimeList = ({ isChecked, searchVal }) => {
  const [animes, setAnimes] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let animeDataUrl = `https://api.jikan.moe/v4/anime?q=${searchVal}`;

      const response = await fetch(animeDataUrl);
      const { data } = await response.json();
      console.log(data, "hiiiiiiiii");

      const animeData = data.map((item) => {
        return {
          name: item.title,
          image_url: item.images.jpg.image_url,
          description: item.synopsis,
          url: item.url,
          rating: item.score,
          episodes: item.episodes,
        };
      });

      setAnimes(animeData);
    }
    fetchData();
  }, [searchVal]);

  useEffect(() => {
    async function fetchData() {
      let topRatedAnimesUrl = "https://api.jikan.moe/v4/top/anime";

      const response = await fetch(topRatedAnimesUrl);
      const { data } = await response.json();
      let topRatedData = data.map((item) => {
        return {
          name: item.title,
          image_url: item.images.jpg.image_url,
          description: item.synopsis,
          url: item.url,
          rating: item.score,
          episodes: item.episodes,
        };
      });

      setTopRated(topRatedData);
    }
    fetchData();
  }, []);

  return (
    <section className="anime-list">
      {isChecked
        ? topRated.map((el, i) => <Card key={el + i} data={el}></Card>)
        : animes.map((el, i) => <Card key={el + i} data={el}></Card>)}
    </section>
  );
};

export default AnimeList;
