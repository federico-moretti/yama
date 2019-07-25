import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const searchBoxStyle = {
  display: 'flex',
};

const inputStyle = {
  marginRight: 5,
};

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (search: string) => void;
}
function SearchBox(props: SearchBoxProps) {
  const { placeholder, onSearch } = props;
  const [value, setValue] = React.useState('');

  return (
    <div style={searchBoxStyle}>
      <Input
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button onClick={() => onSearch(value)}>Search</Button>
    </div>
  );
}

export default SearchBox;
