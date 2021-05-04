import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: []

};
//redux 3 dologból áll: Actions (dispatch), Reducers, State
const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});


export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export default movieSlice.reducer;
//beimportáljuk az app/store.js-be a movieReducer-t