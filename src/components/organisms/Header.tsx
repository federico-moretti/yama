import React from 'react';
import Hero from '../atoms/Hero';
import Title from '../atoms/Title';

interface HeaderProps {
  style?: React.CSSProperties;
}
function Header(props: HeaderProps) {
  const { style } = props;

  return (
    <div style={style}>
      <Hero>
        <Title level={1}>YAMA</Title>
      </Hero>
    </div>
  );
}

export default Header;
