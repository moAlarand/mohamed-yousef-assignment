import React from 'react';
import {AppList, MovieForm} from '../../components';
import AppHeader from '../../components/common/header/header';
import {Screen} from '../../components/common/screen/screen';
import MovieItem from '../../components/movieItem/movie-item';
import {useMoviesByCategoryId} from '../../hooks/movies.hook';
import {Category} from '../../models/category';

export const MoviesScreen = ({route}: any) => {
  const category: Category = route.params.category;
  const {movies, editMovie, addNewMovie, onDeleteMovie, onEditMovie} =
    useMoviesByCategoryId(category.id);

  return (
    <Screen>
      <AppHeader title={category.name} />
      <MovieForm movie={editMovie} onSubmit={addNewMovie} />
      <AppList
        data={movies}
        renderItem={({item}) => (
          <MovieItem
            onEdite={onEditMovie}
            onDelete={onDeleteMovie}
            movie={item}
          />
        )}
      />
    </Screen>
  );
};
