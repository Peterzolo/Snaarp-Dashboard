import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

interface SelectInputProps {
  options?: string[];
  onChange?: (value: string) => void;
  selectedValue?: string;
  width?: string;
  height?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  onChange,
  selectedValue,
  width = '100%',
  height = '30px',
}) => {
  return (
    <SelectWrapper width={width}>
      <Placeholder>{selectedValue || 'All'}</Placeholder>
      <DropdownIcon />
      <SelectList
        value={selectedValue}
        onChange={(e) => onChange && onChange(e.target.value)}
        width={width}
        height={height}
      >
        {options?.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectList>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div<{ width: string }>`
  position: relative;
  display: inline-block;
  width: ${(props) => props.width};
`;

const Placeholder = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 14px;
  pointer-events: none;
`;

const DropdownIcon = styled(FaChevronDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 14px;
  pointer-events: none;
`;

const SelectList = styled.select<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px 30px 10px 10px;
  font-size: 14px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2f54eb;
  }
`;

const Option = styled.option`
  padding: 10px;
  font-size: 14px;
  color: #333;
`;

export default SelectInput;
