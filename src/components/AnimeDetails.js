import React from "react";
import { useLocation, Link } from "react-router-dom";

const AnimeDetails = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <>
      <div className="anime-details-container">
        <h2>{data.name}</h2>
        <img alt={data.title} src={data.image_url}></img>
        <p>{data.description}</p>
        <Link className="link-button" to="/">
          Go Back
        </Link>
      </div>
    </>
  );
};

export default AnimeDetails;
