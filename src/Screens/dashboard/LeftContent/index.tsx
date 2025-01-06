import React from 'react';
import styled from 'styled-components';

export const LeftContent = () => {
  return <MainWrapper>Left Content</MainWrapper>;
};

const MainWrapper = styled.div`
  background-color: white;
  padding: 10px;
  width: 385px;
  height: 400px;
  border-radius: 10px;
  margin-left: -20px;
  margin-right: 5px;
`;
