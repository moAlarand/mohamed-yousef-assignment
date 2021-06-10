import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Movie} from '../models/movie';
import {saveMovie} from '../slices';
import {RootStore} from '../store';

export const useMoviesByCategoryId = (categoryId: number) => {
  const movies = useSelector(
    (state: RootStore) =>
      state.categories.find(cat => cat.id == categoryId)?.movies,
  );
  const dispatch = useDispatch();

  const addNewMovie = useCallback((movie: Movie) => {
    dispatch(saveMovie({categoryId, movie}));
  }, []);

  return {movies, addNewMovie};
};
