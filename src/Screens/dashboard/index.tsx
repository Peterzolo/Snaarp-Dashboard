import React from 'react';
import { DashboardLayout } from '../../Layouts';
import styled from 'styled-components';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <MainWrapper>
        <LeftContentWrapper>
          <LeftContent />
        </LeftContentWrapper>
        <RightContentWrapper>
          <RightContent />
        </RightContentWrapper>
      </MainWrapper>
    </DashboardLayout>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -15px;
`;
const LeftContentWrapper = styled.div``;
const RightContentWrapper = styled.div``;
