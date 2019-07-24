import { Movie } from '../commons/interfaces';

export async function getMovies(name: string): Promise<Movie[]> {
  console.log(name);
  const movies: Movie[] = [];
  return movies;
}
