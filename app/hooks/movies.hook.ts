import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Movie} from '../models/movie';
import {saveMovie, deleteMovie} from '../slices';
import {RootStore} from '../store';

export const useMoviesByCategoryId = (categoryId: number) => {
  const [editMovie, setMovie] = useState<Movie>();

  const movies = useSelector(
    (state: RootStore) =>
      state.movies.find(cat => cat.id == categoryId)?.movies,
  );
  const dispatch = useDispatch();

  const addNewMovie = useCallback((movie: Movie) => {
    setMovie(undefined);
    dispatch(saveMovie({categoryId, movie}));
  }, []);

  const onDeleteMovie = useCallback((movie: Movie) => {
    dispatch(deleteMovie({categoryId, movie}));
  }, []);

  const onEditMovie = useCallback((movie: Movie) => {
    setMovie(movie);
  }, []);

  return {
    movies,
    editMovie,
    addNewMovie,
    onDeleteMovie,
    onEditMovie,
  };
};
