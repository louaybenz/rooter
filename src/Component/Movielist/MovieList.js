import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
const MovieList = ({search, movielist, searchRating}) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "7%",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {movielist
        .filter(
          (el) =>
            el.name.toUpperCase().includes(search.toUpperCase()) &&
            el.rating >= searchRating
        )
        .map((el) => (
          <Card
            key={el.id}
            image={el.image}
            name={el.name}
            type={el.type}
            description={el.description}
            rating={el.rating}
            id={el.id}
          />
        ))}
    </div>
  );
};

export default MovieList;
