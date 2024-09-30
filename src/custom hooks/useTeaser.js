import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTeaser } from "../utils/MovieSlice";

const useTeaser = (teaserId) => {
  console.log(teaserId);
  const dispatch = useDispatch();
  const getTeaser = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${teaserId}/videos`,
        options
      );
      const response = await data.json();
      console.log(response?.results);
      const trailer = response?.results.filter(
        (movie) => movie.type === "Trailer"
      );
      console.log(trailer[0]);
      dispatch(addTeaser(trailer[1]));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTeaser();
  }, []);
};

export default useTeaser;
