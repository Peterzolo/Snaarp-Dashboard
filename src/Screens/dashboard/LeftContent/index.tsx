import React from 'react';
import styled from 'styled-components';
import { LeftSubContentOne } from './components/LeftSubContentOne';
import { LeftSubContentTwo } from './components/LeftSubContentTwo';
import { LeftSubContentThree } from './components/LeftSubContentThree';

export const LeftContent = () => {
  return (
    <MainWrapper>
      <LeftSubContentOne />
      <LeftSubContentTwo />
      <LeftSubContentThree />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-left: -20px;
  margin-right: 5px;
  @media (max-width: 768px) {
    margin-left: 0; // Remove left margin on mobile
    margin-right: 0; // Remove right margin on mobile
    padding: 15px; // Increase padding for better spacing on mobile
  }
`;
