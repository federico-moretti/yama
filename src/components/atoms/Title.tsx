import React from 'react';
import classNames from 'classnames';
import { Size, Level } from '../../commons/types';

interface TitleProps {
  level: Level;
  size?: Size;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Title(props: TitleProps) {
  const { style, size, level, children } = props;

  const classes = classNames({
    title: true,
    [`is-${size}`]: Boolean(size),
  });

  return React.createElement(
    `h${level}`,
    { style, className: classes },
    children
  );
}

export default Title;
