import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
let opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
function Row({ title, fethUrl, isLargeRow }) {
  let [movies, setMovies] = useState([]);
  let [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    // now when to call async function because we are requestingn api for data or info
    async function fetchdata() {
      let request = await axios.get(fethUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchdata(); // calling fetchdata function to give or return data
    // If we add empty array [] then it will run only first time when coponent renderes
  }, [fethUrl]);
  // console.table(movies);
  let handelClick = (movie) => {
    // console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        // movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          // console.log(url);
          // https://www.youtube.com/watch?v=lGmRnu--iU8
          let urlParam = new URLSearchParams(new URL(url).search); // .search will give every thing which is after ? in the youtube video link
          // console.log(urlParam.get("v"));
          setTrailerUrl(urlParam.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-poster">
        {movies.map((movie) => (
          <img
            onClick={() => handelClick(movie)}
            key={movie.id}
            className={`row-posters ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {/* {console.log(trailerUrl, "trainerlurl")} */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
