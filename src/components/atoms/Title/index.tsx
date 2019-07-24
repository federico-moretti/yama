import React from 'react';
import classNames from 'classnames';

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
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
