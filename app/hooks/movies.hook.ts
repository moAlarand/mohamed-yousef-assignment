import {useEffect, useState} from 'react';
import {Movie} from '../models/movie';
import {MoviesApi} from '../services/api/movies.api';

export const useMoviesByCategoryId = (categoryId: number) => {
  const [movies, setmovies] = useState<Movie[]>();

  useEffect(() => {
    const moviesApi = new MoviesApi();
    const movies = moviesApi.getMoviesByCategoryId(categoryId);
    setmovies(movies);
  }, [categoryId]);

  return {movies};
};
