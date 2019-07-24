import React from 'react';
import { useDispatch } from './store';

import Button from './components/atoms/Button';

const App: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        color="primary"
        onClick={() => dispatch({ type: 'GET_MOVIES', payload: 'spider man' })}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
