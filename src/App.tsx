import React from 'react';

import { useDispatch } from './store';
import BaseLayout from './components/layouts/BaseLayout';
import Box from './components/atoms/Box';
import Paragraph from './components/atoms/Paragraph';
import Label from './components/atoms/Label';
import SearchBox from './components/molecules/SearchBox';
import Header from './components/organisms/Header';

const App: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <BaseLayout header={<Header />} footer={<div>© Federico Moretti</div>}>
      <SearchBox
        placeholder="Type a title of a movie"
        onSearch={v => dispatch({ type: 'GET_MOVIES', payload: v })}
      />
      <Box>
        <Label>Hello:</Label>
        <Paragraph>Fede</Paragraph>
      </Box>
    </BaseLayout>
  );
};

export default App;
