import React from 'react';
import classNames from 'classnames';

interface TitleProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Input(props: TitleProps) {
  const { style, children } = props;

  const classes = classNames({
    title: true,
  });

  return (
    <h1 style={style} className={classes}>
      {children}
    </h1>
  );
}

export default Input;
