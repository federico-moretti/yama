import React from 'react';
import classNames from 'classnames';
import { Size, Level, Alignment, alignmentMap } from '../../commons/types';

interface SubtitleProps {
  level: Level;
  size?: Size;
  alignment?: Alignment;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Subtitle(props: SubtitleProps) {
  const { style, size, level, alignment = 'center', children } = props;

  const classes = classNames({
    subtitle: true,
    [`is-${size}`]: Boolean(size),
    [alignmentMap[alignment]]: true,
  });

  return React.createElement(
    `h${level}`,
    { style, className: classes },
    children
  );
}

export default Subtitle;
