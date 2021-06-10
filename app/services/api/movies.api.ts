import {Category} from '../../models/category';
import data from './movies-data.json';

export class MoviesApi {
  //dummy  fetch to  all categories
  getAllCategories = () => {
    const categories: Category[] = data.categories;
    return categories;
  };

  getMoviesByCategoryId = (id: number) => {
    const movies = data.categories.find(cat => cat.id == id)?.movies;
    return movies;
  };
}
