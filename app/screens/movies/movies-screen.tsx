import React from 'react';
import {AppList, MovieForm} from '../../components';
import AppHeader from '../../components/common/header/header';
import {Screen} from '../../components/common/screen/screen';
import MovieItem from '../../components/movieItem/movie-item';
import {useMoviesByCategoryId} from '../../hooks/movies.hook';
import {Category} from '../../models/category';

export const MoviesScreen = ({route}: any) => {
  const category: Category = route.params.category;
  const {movies} = useMoviesByCategoryId(category.id);

  return (
    <Screen>
      <AppHeader title={category.name} />
      <MovieForm onSubmit={() => {}} />
      <AppList
        data={movies}
        renderItem={({item}) => <MovieItem movie={item} />}
      />
    </Screen>
  );
};
