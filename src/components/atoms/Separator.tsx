import React from 'react';

const hrStyle = {
  backgroundColor: 'rgba(1, 209, 178, 0.25)',
};

interface SeparatorProps {
  style?: React.CSSProperties;
}
function Separator(props: SeparatorProps) {
  const { style } = props;

  return <hr style={{ ...hrStyle, ...style }} />;
}

export default Separator;
