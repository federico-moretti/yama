import React from 'react';
import Label from '../atoms/Label';
import Text from '../atoms/Text';

interface LabeledValueProps {
  label: string;
  value: string;
  style?: React.CSSProperties;
}
function LabeledValue(props: LabeledValueProps) {
  const { label, value, style } = props;

  return (
    <div style={style}>
      <Label style={{ marginRight: 5 }}>{label}</Label>
      <Text>{value}</Text>
    </div>
  );
}

export default LabeledValue;
