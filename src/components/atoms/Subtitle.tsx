import React from 'react';
import classNames from 'classnames';
import { Sizes, Levels, Alignments, alignmentsMap } from '../../commons/types';

interface SubtitleProps {
  level: Levels;
  size?: Sizes;
  alignment?: Alignments;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Subtitle(props: SubtitleProps) {
  const { style, size, level, alignment = 'center', children } = props;

  const classes = classNames({
    subtitle: true,
    [`is-${size}`]: Boolean(size),
    [alignmentsMap[alignment]]: true,
  });

  return React.createElement(
    `h${level}`,
    { style, className: classes },
    children
  );
}

export default Subtitle;
