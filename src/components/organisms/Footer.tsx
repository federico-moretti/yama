import React from 'react';
import Paragraph from '../atoms/Paragraph';

interface FooterProps {
  style?: React.CSSProperties;
}
function Footer(props: FooterProps) {
  const { style } = props;

  const actualYear = new Date().getFullYear();
  const years = 2019 === actualYear ? 2019 : `2019-${actualYear}`;
  const text = `© Federico Moretti ${years} • All Rights Reserved`;

  return (
    <footer style={style} className="footer">
      <div className="content has-text-centered">
        <Paragraph>{text}</Paragraph>
      </div>
    </footer>
  );
}

export default Footer;
