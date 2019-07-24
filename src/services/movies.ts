import { Movie } from '../commons/interfaces';
import { MOVIE_DB_KEY } from '../commons/constants';

function movieAdapter(rawMovie: any): Movie {
  return {
    adult: rawMovie.adult,
    backdropPath: rawMovie.backdrop_path,
    genreIds: rawMovie.genre_ids,
    id: rawMovie.id,
    originalLanguage: rawMovie.original_language,
    originalTitle: rawMovie.original_title,
    overview: rawMovie.overview,
    popularity: rawMovie.popularity,
    posterPath: rawMovie.poster_path,
    releaseDate: rawMovie.release_date,
    title: rawMovie.title,
    video: rawMovie.video,
    voteAverage: rawMovie.vote_average,
    voteCount: rawMovie.vote_count,
  };
}

export interface MoviesByNameResponse {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export default {
  searchByName: async (name: string): Promise<MoviesByNameResponse> => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_KEY}&query=${name}`;
      const res = await fetch(url);
      const body = await res.json();

      return {
        movies: body.results.map(movieAdapter),
        page: body.page,
        totalPages: body.total_pages,
        totalResults: body.total_results,
      };
    } catch (error) {
      throw new Error('Fetch error');
    }
  },
};
