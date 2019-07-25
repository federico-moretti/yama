import React from 'react';
import classNames from 'classnames';
import { Colors, colorsMap } from '../../commons/types';

type InputType = 'text' | 'password' | 'email' | 'tel';

interface InputProps {
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: Colors;
  type?: InputType;
  loading?: boolean;
  value?: string;
  placeholder?: string;
}
function Input(props: InputProps) {
  const {
    style,
    color = 'primary',
    loading = 'false',
    placeholder,
    type = 'text',
    value,
    onChange,
  } = props;

  const classes = classNames({
    input: true,
    [colorsMap[color]]: true,
    'is-loading': loading,
  });

  return (
    <input
      style={style}
      className={classes}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
