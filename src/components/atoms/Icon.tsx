import React from 'react';
import { Colors, colorsMap, IconType } from '../../commons/types';
import { ReactComponent as Chevron } from '../../icons/chevron-down.svg';

interface IconProps {
  style?: React.CSSProperties;
  color?: Colors;
  type: IconType;
}
function Icon(props: IconProps) {
  const { type, color, style } = props;
  const map = {
    chevron: Chevron,
  };

  const iconProps = {
    stroke: color ? colorsMap[color] : undefined,
    style,
  };

  return React.createElement(map[type], iconProps);
}

export default Icon;
