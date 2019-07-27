import React from 'react';

const hrStyle = {};

interface SeparatorProps {
  style?: React.CSSProperties;
}
function Separator(props: SeparatorProps) {
  const { style } = props;

  return <hr style={{ ...hrStyle, ...style }} />;
}

export default Separator;
