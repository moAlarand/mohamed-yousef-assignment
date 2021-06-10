import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Category} from '../models/category';
import {MoviesApi} from '../services/api/movies.api';
import {RootStore} from '../store';
import {setCategories, saveCategory} from '../slices/movies.slice';

export const useCategories = () => {
  const categories = useSelector((state: RootStore) => state.categories);
  const dispatch = useDispatch();

  const addNewCategory = useCallback((category: Category) => {
    dispatch(saveCategory(category));
  }, []);

  useEffect(() => {
    const moviesApi = new MoviesApi();
    const categories = moviesApi.getAllCategories();
    dispatch(setCategories(categories));
  }, []);

  return {categories, addNewCategory};
};
