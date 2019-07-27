import React from 'react';
import styled from 'styled-components';
import { Movie, Genre } from '../../commons/types';
import { MOVIE_DB_IMAGE_PATH } from '../../commons/constants';
import Box from '../atoms/Box';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import LabeledValue from './LabeledValue';
import Image from '../atoms/Image';

const InfoContainer = styled.div`
  margin-top: 20px;
  display: block;

  @media (min-width: 800px) {
    display: flex;
  }
`;

const titleContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const imageStyle = {
  borderRadius: 6,
};

const ContainerImage = styled.div`
  float: left;
  margin-right: 20px;

  @media (min-width: 800px) {
    float: none;
  }
`;

interface MovieBoxProps {
  movie: Movie;
  genres: Genre[];
}
function MovieBox(props: MovieBoxProps) {
  const { movie, genres } = props;
  const [showInfos, setShowInfos] = React.useState(false);

  function toggleInfos() {
    setShowInfos(b => !b);
  }

  function getGenres(ids: number[]): string {
    // filter(Boolean) remove all undefined from the array values
    const genresFound = ids
      .map(id => genres.find(g => g.id === id))
      .filter(Boolean) as Genre[];
    return genresFound.map(genre => genre.name).join(', ');
  }

  return (
    <Box>
      <div style={titleContainerStyle}>
        <Title style={{ marginBottom: 0 }} level={1} size={5} alignment="left">
          {movie.title} ({movie.releaseDate.slice(0, 4)})
        </Title>
        <Button testid="movie-box-button" outlined onClick={toggleInfos}>
          Show more
        </Button>
      </div>
      {showInfos && (
        <InfoContainer>
          {movie.posterPath && (
            <ContainerImage>
              <Image
                imageStyle={imageStyle}
                src={`${MOVIE_DB_IMAGE_PATH}w200${movie.posterPath}`}
              />
            </ContainerImage>
          )}
          <div>
            <LabeledValue label="Vote:" value={movie.voteAverage.toString()} />
            <LabeledValue label="Genres:" value={getGenres(movie.genreIds)} />
            <LabeledValue label="Plot:" value={movie.overview} />
          </div>
        </InfoContainer>
      )}
    </Box>
  );
}

export default MovieBox;
