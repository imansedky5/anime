import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
const Card = ({ data }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "card card-dark" : "card"}>
      <img alt={data.title} src={data.image_url}></img>
      <h2> {data.name}</h2>
      <Link
        className={darkMode ? "link-button button-dark" : "link-button"}
        to="/animeDetails"
        state={{ data }}
      >
        Read More
      </Link>
    </div>
  );
};

export default Card;
