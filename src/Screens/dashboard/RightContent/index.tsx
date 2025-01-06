import React from 'react';
import { styled } from 'styled-components';
import { TopSearchWrapperOne } from './components/TopSearchWrapperOne';
import { TopSearchWrapperTwo } from './components/TopSearchWrapperTwo';

export const RightContent = () => {
  return (
    <MainWrapper>
      <TopSearchWrapperOne />
      <TopSearchWrapperTwo />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 860px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
