import React from 'react';
import classNames from 'classnames';
import { Colors, Sizes } from '../../commons/types';

const containerStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
};

const deleteButtonStyle: React.CSSProperties = {
  position: 'absolute',
  right: '10px',
  top: 'calc(50% - 10px)',
};

type InputTypes = 'text' | 'password' | 'email' | 'tel';

interface InputProps {
  style?: React.CSSProperties;
  color?: Colors;
  size?: Sizes;
  type?: InputTypes;
  value?: string;
  placeholder?: string;
  testid?: string;
  focusOnMount?: boolean;
  enableDelete?: boolean;
  onChange?: (value: string) => void;
  onEnter?: () => void;
}
function Input(props: InputProps) {
  const {
    style,
    color = 'primary',
    type = 'text',
    size = 'normal',
    testid,
    placeholder,
    value,
    focusOnMount = false,
    enableDelete = true,
    onChange = () => {},
    onEnter,
  } = props;

  const classes = classNames({
    input: true,
    [`is-${color}`]: true,
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

  function deleteValue() {
    onChange('');
    ref.current.focus();
  }

  return (
    <div style={{ ...containerStyle, ...style }}>
      <input
        ref={ref}
        data-testid={testid}
        className={classes}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {enableDelete && value && value.length > 0 && (
        <span
          data-testid={testid + '-delete-button'}
          onClick={deleteValue}
          style={deleteButtonStyle}
          className="delete"
        />
      )}
    </div>
  );
}

export default Input;
