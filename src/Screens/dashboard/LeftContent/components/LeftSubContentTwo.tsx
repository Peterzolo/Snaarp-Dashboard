import React from 'react';
import styled from 'styled-components';
import RadioInput from '../../../../Components/RadioButton/RadioButton';

export const LeftSubContentTwo = () => {
  return (
    <MainWrapper>
      <RadioButtonWrapper>
        <RadioInput
          name="example"
          value="option1"
          label="All organizational units users"
          checked={true}
          onChange={(e) => console.log(e.target.value)}
          borderColor="#3498db"
          labelColor="#2c3e50"
          iconColor="#3498db"
          size="24px"
        />
      </RadioButtonWrapper>
      <RadioButtonWrapper>
        <RadioInput
          name="example"
          value="option1"
          label="Selected ordanizational units users"
          checked={true}
          onChange={(e) => console.log(e.target.value)}
          borderColor="#3498db"
          labelColor="#2c3e50"
          iconColor="#3498db"
          size="24px"
        />
      </RadioButtonWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioButtonWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
`;
