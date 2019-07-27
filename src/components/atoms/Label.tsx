import React from 'react';
import classNames from 'classnames';
import { TextSizes } from '../../commons/types';

interface LabelProps {
  size?: TextSizes;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Label(props: LabelProps) {
  const { style, size = 6, children } = props;

  const classes = classNames({
    [`is-size-${size}`]: Boolean(size),
    'has-text-weight-semibold': true,
  });

  return (
    <span style={style} className={classes}>
      {children}
    </span>
  );
}

export default Label;
