import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const searchBoxStyle = {
  marginBottom: 26,
};

const inputAndButtonStyle = {
  display: 'flex',
};

const inputStyle = {
  marginRight: 5,
};

interface SearchBoxProps {
  error?: Error | null;
  placeholder?: string;
  loading?: boolean;
  onSearch: (search: string) => void;
}
function SearchBox(props: SearchBoxProps) {
  const { placeholder, error, onSearch, loading } = props;
  const [value, setValue] = React.useState('');

  return (
    <div style={searchBoxStyle}>
      <div style={inputAndButtonStyle}>
        <Input
          testid="search-box-input"
          style={inputStyle}
          size="large"
          focusOnMount={true}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          onEnter={() => onSearch(value)}
        />
        <Button
          testid="search-box-button"
          loading={loading}
          size="large"
          onClick={() => onSearch(value)}
        >
          Search
        </Button>
      </div>
      {error && (
        <Text
          testid="search-box-error"
          style={{ position: 'absolute' }}
          color="danger"
        >
          {error.message}
        </Text>
      )}
    </div>
  );
}

export default SearchBox;
