import React from 'react';
import styled from 'styled-components';

interface IRadioInputProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  labelColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  size?: string; // To control the size of the radio button
}

const RadioInput: React.FC<IRadioInputProps> = ({
  name,
  value,
  label,
  checked = false,
  onChange,
  borderColor = '#ccc',
  labelColor = '#333',
  backgroundColor = '#fff',
  iconColor = '#f1f1f1',
  size = '20px',
}) => {
  return (
    <RadioWrapper>
      <StyledRadioButton
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        borderColor={borderColor}
        iconColor={iconColor}
        size={size}
      />
      <StyledLabel labelColor={labelColor}>{label}</StyledLabel>
    </RadioWrapper>
  );
};

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
`;

const StyledRadioButton = styled.input<{
  borderColor: string;
  iconColor: string;
  size: string;
}>`
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 50%;
    height: 50%;
    background-color: ${({ iconColor }) => iconColor};
    border-radius: 50%;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  &:checked {
    background-color: ${({ iconColor }) => iconColor};
  }
`;

const StyledLabel = styled.label<{ labelColor: string }>`
  color: ${({ labelColor }) => labelColor};
  font-size: 16px;
  cursor: pointer;
`;

export default RadioInput;
