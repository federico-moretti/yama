import React from 'react';
import classNames from 'classnames';
import { Colors } from '../../commons/types';

interface HeroProps {
  style?: React.CSSProperties;
  color?: Colors;
  children: React.ReactNode;
}
function Hero(props: HeroProps) {
  const { style, color = 'primary', children } = props;

  const classes = classNames({
    hero: true,
    [`is-${color}`]: true,
  });

  return (
    <section style={style} className={classes}>
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
