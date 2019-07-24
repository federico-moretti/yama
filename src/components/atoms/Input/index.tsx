import React from 'react';
import classNames from 'classnames';
import { Colors, colorsMap } from '../../../commons/types';

type InputType = 'text' | 'password' | 'email' | 'tel';

interface InputProps {
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: Colors;
  type?: InputType;
  loading?: boolean;
  value?: string;
}
function Input(props: InputProps) {
  const {
    style,
    value,
    onChange,
    color = 'primary',
    type = 'text',
    loading = 'false',
  } = props;

  const classes = classNames({
    input: true,
    [colorsMap[color]]: true,
    'is-loading': loading,
  });

  return (
    <input
      style={style}
      value={value}
      type={type}
      className={classes}
      onChange={onChange}
    />
  );
}

export default Input;
