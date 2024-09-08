import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../custom hooks/useGetNowPlayingMovies";
import { useSelector } from "react-redux";
import MovieInfo from "./MovieInfo";
const Browse = () => {
  useGetNowPlayingMovies();
  const movies = useSelector((store) => store.movies.movies);
  if (movies === null) {
    return;
  }
  console.log(movies[0]);
  const { title, overview } = movies[0];

  return (
    <div>
      <Header></Header>

      <MovieInfo title={title} overview={overview}></MovieInfo>
    </div>
  );
};

export default Browse;
