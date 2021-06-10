import {Movie} from './movie';

export interface Category {
  id: number;
  name: string;
  url: string;
  description: string;
  movies: Movie[];
}
