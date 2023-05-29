import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requets";
import "./banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
  let [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(requests.fetchTrending);

      let request =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      setMovie(request);
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_discription">{truncate(movie?.overview, 150)}</h1>
        <div className="banner_fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner;
