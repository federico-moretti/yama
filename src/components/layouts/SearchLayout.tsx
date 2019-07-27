import React from 'react';
import Separator from '../atoms/Separator';

const mainStyle = {
  flex: 1,
};
const Main = ({ children }: { children: React.ReactNode }) => (
  <main style={mainStyle} className="section">
    {children}
  </main>
);

const baseLayoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

interface SearchLayoutProps {
  style?: React.CSSProperties;
  showSeparator?: boolean;
  header: React.ReactNode;
  searchBox: React.ReactNode;
  list: React.ReactNode;
  footer: React.ReactNode;
}
function SearchLayout(props: SearchLayoutProps) {
  const {
    style,
    showSeparator = true,
    header,
    searchBox,
    list,
    footer,
  } = props;

  return (
    <div style={{ ...baseLayoutStyle, ...style }}>
      {header}
      <Main>
        {searchBox}
        {showSeparator && <Separator />}
        {list}
      </Main>
      {footer}
    </div>
  );
}

export default SearchLayout;
