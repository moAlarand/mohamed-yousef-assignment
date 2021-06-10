import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category} from '../models/category';
import {Movie} from '../models/movie';

const initialState: Category[] = [];

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      return [...action.payload];
    },
    saveCategory: (state, action: PayloadAction<Category>) => {
      return [action.payload, ...state];
    },
    saveMovie: (
      state,
      action: PayloadAction<{categoryId: number; movie: Movie}>,
    ) => {
      const index = state.findIndex(cat => cat.id == action.payload.categoryId);

      if (index != -1) {
        const category = state[index];
        const movies = category.movies.filter(
          mov => mov.id != action.payload.movie.id,
        );
        const newMovies = [action.payload.movie, ...movies];
        state[index] = {...category, movies: newMovies};
      }
    },
    deleteMovie: (
      state,
      action: PayloadAction<{categoryId: number; movie: Movie}>,
    ) => {
      const index = state.findIndex(cat => cat.id == action.payload.categoryId);
      if (index != -1) {
        const category = state[index];
        const movies = category.movies;
        const newMovies = movies.filter(
          mov => mov.id !== action.payload.movie.id,
        );
        state[index] = {...category, movies: newMovies};
      }
    },
  },
});

export const {saveCategory, saveMovie, setCategories, deleteMovie} =
  moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
