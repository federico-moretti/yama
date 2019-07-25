import React from 'react';
import { Movie } from '../../commons/types';
import MovieBox from '../molecules/MovieBox';

const movieBoxListContainerStyle = {
  marginTop: 20,
};

interface MovieBoxListProps {
  movies: Movie[];
}
function MovieBoxList(props: MovieBoxListProps) {
  const { movies } = props;

  return (
    <div style={movieBoxListContainerStyle}>
      {movies.map(m => (
        <MovieBox key={m.id} movie={m} />
      ))}
    </div>
  );
}

export default MovieBoxList;
