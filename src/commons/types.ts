export type Colors =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export const colorsMap = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
};

export type Size = 1 | 2 | 3 | 4 | 5 | 6;

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export type Alignment = 'center' | 'justify' | 'left' | 'right';

export const alignmentMap = {
  center: 'has-text-centered',
  justify: 'has-text-justified',
  left: 'has-text-left',
  right: 'has-text-right',
};

export interface Movie {
  posterPath: string | null;
  adult: boolean;
  backdropPath: string | null;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
