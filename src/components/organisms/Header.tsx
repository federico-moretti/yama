import React from 'react';
import Hero from '../atoms/Hero';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';

interface HeaderProps {
  style?: React.CSSProperties;
}
function Header(props: HeaderProps) {
  const { style } = props;

  return (
    <header style={style}>
      <Hero>
        <Title level={1}>YAMA</Title>
        <Subtitle level={2}>Yet Another Movies App</Subtitle>
      </Hero>
    </header>
  );
}

export default Header;
