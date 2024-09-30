import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../custom hooks/useGetNowPlayingMovies";
import { useSelector } from "react-redux";
import MovieInfo from "./MovieInfo";
import MovieTeaser from "./MovieTeaser";
const Browse = () => {
  useGetNowPlayingMovies();
  const movies = useSelector((store) => store.movies.movies);
  if (movies === null) {
    return;
  }

  const { title, overview, id } = movies[0];

  return (
    <div>
      <Header></Header>

      <MovieInfo title={title} overview={overview}></MovieInfo>
      <MovieTeaser teaserId={id}></MovieTeaser>
    </div>
  );
};

export default Browse;
