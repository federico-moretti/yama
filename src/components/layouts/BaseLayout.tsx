import React from 'react';

interface BaseLayoutProps {
  style?: React.CSSProperties;
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const headerStyle = {};
const Header = ({ children }: { children: React.ReactNode }) => (
  <div style={headerStyle}>{children}</div>
);

const mainStyle = {};
const Main = ({ children }: { children: React.ReactNode }) => (
  <div style={mainStyle} className="section">
    {children}
  </div>
);

const footerStyle = {};
const Footer = ({ children }: { children: React.ReactNode }) => (
  <div style={footerStyle}>{children}</div>
);

function BaseLayout(props: BaseLayoutProps) {
  const { style, header, children, footer } = props;

  return (
    <div style={style}>
      <Header>{header}</Header>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </div>
  );
}

export default BaseLayout;
