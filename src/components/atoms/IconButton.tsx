import React from 'react';
import { Colors, IconType } from '../../commons/types';
import Icon from './Icon';

const baseButtonStyle: React.CSSProperties = {
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  padding: 0,
  border: 0,
  margin: 0,
};

interface IconButtonProps {
  buttonStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  color?: Colors;
  type: IconType;
  loading?: boolean;
  outlined?: boolean;
  testid?: string;
  onClick: () => void;
}
function IconButton(props: IconButtonProps) {
  const {
    buttonStyle,
    iconStyle,
    color = 'primary',
    type,
    testid,
    onClick,
  } = props;

  return (
    <button
      data-testid={testid}
      style={{ ...baseButtonStyle, ...buttonStyle }}
      onClick={onClick}
    >
      <Icon style={iconStyle} type={type} color={color} />
    </button>
  );
}

export default IconButton;
