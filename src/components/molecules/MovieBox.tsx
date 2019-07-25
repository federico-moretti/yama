import React from 'react';
import Box from '../atoms/Box';
import { Movie } from '../../commons/types';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import LabeledValue from './LabeledValue';
import Image from '../atoms/Image';

const mdbImagePath = 'https://image.tmdb.org/t/p/w200';

const boxStyle = {
  transition: 'height 0.5s ease-in',
};

const infoContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 20,
};

const titleContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const imageStyle = { maxWidth: 200, minWidth: 120, borderRadius: 6 };

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
      <div style={titleContainerStyle}>
        <Title style={{ marginBottom: 0 }} level={1} size={5} alignment="left">
          {movie.title} ({movie.releaseDate.slice(0, 4)})
        </Title>
        <Button outlined onClick={toggleInfos}>
          Show more
        </Button>
      </div>
      {showInfos && (
        <div style={infoContainerStyle}>
          <div>
            <LabeledValue label="Vote:" value={movie.voteAverage.toString()} />
            <LabeledValue label="Genres:" value={movie.genreIds.join(', ')} />
            <LabeledValue label="Plot:" value={movie.overview} />
          </div>
          <Image
            imageStyle={imageStyle}
            src={`${mdbImagePath}${movie.posterPath}`}
          />
        </div>
      )}
    </Box>
  );
}

export default MovieBox;
