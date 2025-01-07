import React from 'react';
import { styled } from 'styled-components';
import { TopSearchWrapperOne } from './components/TopSearchWrapperOne';
import { TopSearchWrapperTwo } from './components/TopSearchWrapperTwo';
import { TableWrapperComponent } from './components/TableWrapperComponent';

export const RightContent = () => {
  return (
    <MainWrapper>
      <TopSearchWrapperOne />
      <TopSearchWrapperTwo />
      <TableWrapperComponent />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
