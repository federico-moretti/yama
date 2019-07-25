import React from 'react';
import Paragraph from '../atoms/Paragraph';

interface FooterProps {
  style?: React.CSSProperties;
}
function Footer(props: FooterProps) {
  const { style } = props;

  return (
    <footer style={style} className="footer">
      <div className="content has-text-centered">
        <Paragraph>© Federico Moretti</Paragraph>
      </div>
    </footer>
  );
}

export default Footer;
