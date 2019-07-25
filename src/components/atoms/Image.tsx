import React from 'react';
import classNames from 'classnames';

interface ImageProps {
  src: string;
  alt?: string; // this should be mandatory
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}
function Image(props: ImageProps) {
  const { src, alt, style, imageStyle } = props;

  const classes = classNames({
    image: true,
  });

  return (
    <figure style={style} className={classes}>
      <img style={imageStyle} src={src} alt={alt} />
    </figure>
  );
}

export default Image;
