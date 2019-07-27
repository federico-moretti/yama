import React from 'react';
import classNames from 'classnames';
import { TextSizes, Colors } from '../../commons/types';

interface TextProps {
  size?: TextSizes;
  color?: Colors;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Text(props: TextProps) {
  const { style, size = 6, color, children } = props;

  const classes = classNames({
    [`is-size-${size}`]: true,
    [`has-text-${color}`]: Boolean(color),
  });

  return (
    <span style={style} className={classes}>
      {children}
    </span>
  );
}

export default Text;
