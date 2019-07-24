import React from 'react';
import { useDispatch } from './store';

import Button from './components/atoms/Button';
import Input from './components/atoms/Input';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  return (
    <div>
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
    </div>
  );
};

export default App;
