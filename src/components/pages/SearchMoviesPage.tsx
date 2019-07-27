import React from 'react';
import SearchLayout from '../layouts/SearchLayout';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import SearchBox from '../molecules/SearchBox';
import { useDispatch, useSelector } from '../../store';
import MovieBoxList from '../organisms/MovieBoxList';

function SearchMoviesPage() {
  const dispatch = useDispatch();
  const { movies, error, loading } = useSelector(
    ({ moviesState }) => moviesState
  );

  const moviesSearchBox = (
    <SearchBox
      placeholder="Type a title of a movie"
      error={error}
      loading={loading}
      onSearch={v => dispatch({ type: 'GET_MOVIES_REQUEST', payload: v })}
    />
  );

  return (
    <SearchLayout
      header={<Header />}
      searchBox={moviesSearchBox}
      showSeparator={movies.length > 0}
      list={<MovieBoxList movies={movies} />}
      footer={<Footer />}
    />
  );
}

export default SearchMoviesPage;
