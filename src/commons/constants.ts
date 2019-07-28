export const MOVIE_DB_KEY = process.env.REACT_APP_MOVIE_DB_KEY;
export const MOVIE_DB_PATH = process.env.REACT_APP_MOVIE_DB_PATH;
export const MOVIE_DB_IMAGE_PATH = process.env.REACT_APP_MOVIE_DB_IMAGE_PATH;

function warnForUndefinedConstants(label: string, value: any) {
  if (typeof value === 'undefined') {
    console.warn(
      `"${label}" is undefined, the app could have an unexpected behaviour.`
    );
  }
}

warnForUndefinedConstants('MOVIE_DB_KEY', MOVIE_DB_KEY);
warnForUndefinedConstants('MOVIE_DB_PATH', MOVIE_DB_PATH);
warnForUndefinedConstants('MOVIE_DB_IMAGE_PATH', MOVIE_DB_IMAGE_PATH);
