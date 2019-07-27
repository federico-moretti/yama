import React from 'react';
import classNames from 'classnames';
import {
  TextSizes,
  Levels,
  Alignments,
  alignmentsMap,
} from '../../commons/types';

interface TitleProps {
  level: Levels;
  size?: TextSizes;
  alignment?: Alignments;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Title(props: TitleProps) {
  const { style, size, level, alignment = 'center', children } = props;

  const classes = classNames({
    title: true,
    [`is-${size}`]: Boolean(size),
    [alignmentsMap[alignment]]: true,
  });

  return React.createElement(
    `h${level}`,
    { style, className: classes },
    children
  );
}

export default Title;
