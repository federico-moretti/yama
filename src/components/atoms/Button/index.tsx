import React from 'react';
import classNames from 'classnames';
import { Colors, colorsMap } from '../../../commons/types';

interface ButtonProps {
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
  color?: Colors;
}
function Button(props: ButtonProps) {
  const { style, onClick, color = 'primary', children } = props;

  const classes = classNames({
    button: true,
    [colorsMap[color]]: true,
  });

  return (
    <button style={style} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
