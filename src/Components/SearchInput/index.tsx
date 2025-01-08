import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

interface ISearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  inputPadding?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  responsiveWidth?: string; // Optional prop for mobile width
}

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSearch,
  borderRadius = '8px',
  borderColor = '#ccc',
  backgroundColor = '#f9f9f9',
  iconColor = '#555',
  inputPadding = '10px 15px 10px 40px',
  fontSize = '16px',
  width = '100%',
  height = '40px',
  responsiveWidth = '100%', // Default to full width on smaller screens
}) => {
  return (
    <MainWrapper
      borderRadius={borderRadius}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      responsiveWidth={responsiveWidth}
    >
      <StyledSearchIcon iconColor={iconColor} onClick={onSearch} />
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        padding={inputPadding}
        fontSize={fontSize}
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.div<{
  borderRadius: string;
  borderColor: string;
  backgroundColor: string;
  width: string;
  height: string;
  responsiveWidth: string;
}>`
  display: flex;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 5px;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    width: auto;
    height: auto;
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;

const StyledSearchIcon = styled(FaSearch)<{ iconColor: string }>`
  color: ${({ iconColor }) => iconColor};
  position: absolute;
  left: 10px;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 480px) {
    left: 0;
    position: relative;
  }
`;

const StyledInput = styled.input<{ padding: string; fontSize: string }>`
  border: none;
  outline: none;
  width: 100%;
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  background: transparent;

  @media (max-width: 480px) {
    display: none; /* Hides the input field */
  }
`;

export default SearchInput;
