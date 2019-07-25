import React from 'react';
import { useDispatch, useSelector } from './store';
import BaseLayout from './components/layouts/BaseLayout';
import SearchBox from './components/molecules/SearchBox';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import MovieBoxList from './components/organisms/MovieBoxList';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.moviesState);

  return (
    <BaseLayout header={<Header />} footer={<Footer />}>
      <SearchBox
        placeholder="Type a title of a movie"
        onSearch={v => dispatch({ type: 'GET_MOVIES', payload: v })}
      />
      <MovieBoxList movies={movies} />
    </BaseLayout>
  );
};

export default App;
