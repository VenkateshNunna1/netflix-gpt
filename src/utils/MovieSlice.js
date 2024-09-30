import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movie Slice",
  initialState: {
    movies: null,
    teaser: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
      console.log(state.movies);
    },
    addTeaser: (state, action) => {
      state.teaser = action.payload;
      console.log(state.teaser);
    },
  },
});
export const { addMovies, addTeaser } = MovieSlice.actions;
export default MovieSlice.reducer;
