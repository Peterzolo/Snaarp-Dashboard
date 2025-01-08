import React from 'react';
import styled from 'styled-components';
import { DashboardLayout } from '../../../Layouts';

export const Account = () => {
  return (
    <DashboardLayout>
      <MainWrapper>
        <Text>Page Content here</Text>
      </MainWrapper>
    </DashboardLayout>
  );
};

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;

const Text = styled.h2`
  color: #242222;
  width: 300px;
  text-align: center;
  background-color: lightgray;
  padding: 10px;
  border-radius: 10px;
`;
