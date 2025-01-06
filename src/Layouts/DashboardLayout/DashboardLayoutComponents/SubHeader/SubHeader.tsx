import React from 'react';
import styled from 'styled-components';

export const SubHeader = () => {
  return <MainWrapper>Device Management</MainWrapper>;
};

const MainWrapper = styled.div`
  height: 60px;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
