import React from 'react';
import classNames from 'classnames';
import { Colors, Sizes } from '../../commons/types';

interface ButtonProps {
  style?: React.CSSProperties;
  color?: Colors;
  size?: Sizes;
  loading?: boolean;
  outlined?: boolean;
  testid?: string;
  onClick: () => void;
  children: React.ReactNode;
}
function Button(props: ButtonProps) {
  const {
    style,
    onClick,
    color = 'primary',
    size = 'normal',
    loading = false,
    outlined = false,
    testid,
    children,
  } = props;

  const classes = classNames({
    button: true,
    [`is-${color}`]: true,
    [`is-${size}`]: true,
    'is-loading': loading,
    'is-outlined': outlined,
  });

  return (
    <button
      data-testid={testid}
      style={style}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
