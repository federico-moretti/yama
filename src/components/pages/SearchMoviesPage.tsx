import React from 'react';
import SearchLayout from '../layouts/SearchLayout';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import SearchBox from '../molecules/SearchBox';
import { useDispatch, useSelector } from '../../store';
import MovieBoxList from '../organisms/MovieBoxList';

function SearchMoviesPage() {
  const dispatch = useDispatch();
  const { movies, genres, error, loading, didSearch } = useSelector(
    ({ moviesState }) => moviesState
  );

  console.log({ movies, genres, error, loading });
  React.useEffect(() => {
    dispatch({ type: 'GET_MOVIES_GENRES_REQUEST' });
  }, [dispatch]);

  const moviesSearchBox = (
    <SearchBox
      placeholder="Search a movie"
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
      list={
        <MovieBoxList didSearch={didSearch} genres={genres} movies={movies} />
      }
      footer={<Footer />}
    />
  );
}

export default SearchMoviesPage;
