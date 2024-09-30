import React from "react";
import useTeaser from "../custom hooks/useTeaser";
import { useSelector } from "react-redux";

const MovieTeaser = ({ teaserId }) => {
  const getTrailer = useSelector((store) => store?.movies?.teaser);

  useTeaser(teaserId);
  return (
    <div cassName="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${getTrailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default MovieTeaser;
