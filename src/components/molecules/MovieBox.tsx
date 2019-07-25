import React from 'react';
import Box from '../atoms/Box';
import { Movie } from '../../commons/types';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import LabeledValue from './LabeledValue';

const boxStyle = {
  transition: 'height 0.5s ease-in',
};

const titleWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

interface MovieBoxProps {
  movie: Movie;
}
function MovieBox(props: MovieBoxProps) {
  const { movie } = props;
  const [showInfos, setShowInfos] = React.useState(false);

  function toggleInfos() {
    setShowInfos(b => !b);
  }

  return (
    <Box style={boxStyle}>
      <div style={titleWrapperStyle}>
        <Title style={{ marginBottom: 0 }} level={1} size={5} alignment="left">
          {movie.title} ({movie.releaseDate.slice(0, 4)})
        </Title>
        <Button outlined onClick={toggleInfos}>
          Show more
        </Button>
      </div>
      {showInfos && (
        <LabeledValue label="Vote:" value={movie.voteAverage.toString()} />
      )}
    </Box>
  );
}

export default MovieBox;
