import React from 'react';
import classNames from 'classnames';
import { TextSizes, Colors } from '../../commons/types';

interface LinkProps {
  href: string;
  size?: TextSizes;
  color?: Colors;
  style?: React.CSSProperties;
  testid?: string;
  children: React.ReactNode;
}
function Link(props: LinkProps) {
  const { href, style, size = 6, color = 'link', testid, children } = props;

  const classes = classNames({
    [`is-size-${size}`]: true,
    [`has-text-${color}`]: true,
  });

  return (
    <a data-testid={testid} style={style} className={classes} href={href}>
      {children}
    </a>
  );
}

export default Link;
