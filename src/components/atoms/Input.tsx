import React from 'react';
import classNames from 'classnames';
import { Colors, colorsMap, Sizes } from '../../commons/types';

type InputTypes = 'text' | 'password' | 'email' | 'tel';

interface InputProps {
  style?: React.CSSProperties;
  color?: Colors;
  size?: Sizes;
  type?: InputTypes;
  loading?: boolean;
  value?: string;
  placeholder?: string;
  focusOnMount?: boolean;
  onChange?: (value: string) => void;
  onEnter?: () => void;
}
function Input(props: InputProps) {
  const {
    style,
    color = 'primary',
    loading = 'false',
    type = 'text',
    size = 'normal',
    placeholder,
    value,
    focusOnMount = false,
    onChange = () => {},
    onEnter,
  } = props;

  const classes = classNames({
    input: true,
    [colorsMap[color]]: true,
    'is-loading': loading,
    [`is-${size}`]: true,
  });

  const ref = React.useRef((null as unknown) as HTMLInputElement);
  React.useEffect(() => {
    if (focusOnMount) {
      ref.current.focus();
    }
  }, [focusOnMount]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (onEnter && event.key === 'Enter') onEnter();
  }

  return (
    <input
      ref={ref}
      style={style}
      className={classes}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Input;
