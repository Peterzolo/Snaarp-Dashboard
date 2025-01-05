import React from 'react';
import { DashboardLayout } from '../../Layouts';
import styled from 'styled-components';

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <MainWrapper>Main Dashboard Content</MainWrapper>
    </DashboardLayout>
  );
};

const MainWrapper = styled.div``;
