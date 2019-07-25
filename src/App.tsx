import React from 'react';
import { useDispatch } from './store';

import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import BaseLayout from './components/layouts/BaseLayout';
import Title from './components/atoms/Title';
import Box from './components/atoms/Box';
import Paragraph from './components/atoms/Paragraph';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  return (
    <BaseLayout
      header={<Title level={1}>YAMA</Title>}
      footer={<div>© Federico Moretti</div>}
    >
      <Button
        color="primary"
        onClick={() => dispatch({ type: 'GET_MOVIES', payload: search })}
      >
        Search
      </Button>
      <Input
        placeholder="Type a movie title"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <Box>
        <Paragraph>hello!</Paragraph>
      </Box>
    </BaseLayout>
  );
};

export default App;
