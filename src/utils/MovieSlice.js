import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movie Slice",
  initialState: {
    movies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
      console.log(state.movies);
    },
  },
});
export const { addMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
