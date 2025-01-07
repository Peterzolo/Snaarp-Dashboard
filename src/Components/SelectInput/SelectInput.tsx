import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap'; // Bootstrap Form import
import { MdArrowDropDown } from 'react-icons/md'; // React icon import

interface ISelectInputProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string; // Optional placeholder prop
  helperText?: string;
  padding?: string; // Customizable padding
  marginTop?: string; // Customizable margin-top
  width?: string; // Customizable width
  height?: string; // Customizable height
}

export const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  helperText,
  padding,
  marginTop,
  width,
  height,
}) => {
  return (
    <MainWrapper
      padding={padding}
      marginTop={marginTop}
      width={width}
      height={height}
    >
      <Form.Group controlId="selectInput">
        <Form.Label>{label}</Form.Label>
        <div className="d-flex align-items-center">
          <Form.Select value={value} onChange={onChange} className="no-border">
            {placeholder && (
              <option value="" disabled selected hidden>
                {placeholder}
              </option>
            )}
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
          <MdArrowDropDown
            style={{
              position: 'absolute',
              right: '10px',
              pointerEvents: 'none',
            }}
          />
        </div>
        {helperText && (
          <Form.Text className="text-muted">{helperText}</Form.Text>
        )}
      </Form.Group>
    </MainWrapper>
  );
};

const MainWrapper = styled.div<{
  padding?: string;
  marginTop?: string;
  width?: string;
  height?: string;
}>`
  max-width: 400px;
  margin: 0 auto;
  padding: ${({ padding }) => padding || '16px'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};

  .form-select {
    position: relative;
    padding-right: 30px;
  }

  .no-border {
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
