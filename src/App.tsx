import React from 'react';
import { useDispatch } from './store';

import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import BaseLayout from './components/layouts/BaseLayout';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  return (
    <BaseLayout header={<div>YAMA</div>} footer={<div>© Federico Moretti</div>}>
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
    </BaseLayout>
  );
};

export default App;
