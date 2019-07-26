import React from 'react';
import classNames from 'classnames';
import { Sizes } from '../../commons/types';

interface ParagraphProps {
  size?: Sizes;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Paragraph(props: ParagraphProps) {
  const { style, size = 6, children } = props;

  const classes = classNames({
    [`is-size-${size}`]: Boolean(size),
  });

  return (
    <p style={style} className={classes}>
      {children}
    </p>
  );
}

export default Paragraph;
