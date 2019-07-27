import React from 'react';
import { Movie, Genre } from '../../commons/types';
import MovieBox from '../molecules/MovieBox';

const movieBoxListContainerStyle = {
  marginTop: 20,
};

interface MovieBoxListProps {
  movies: Movie[];
  genres: Genre[];
}
function MovieBoxList(props: MovieBoxListProps) {
  const { movies, genres } = props;

  return (
    <div style={movieBoxListContainerStyle}>
      {movies.map(m => (
        <MovieBox key={m.id} genres={genres} movie={m} />
      ))}
    </div>
  );
}

export default MovieBoxList;
