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

  width: 100%;
`;

const LeftContentWrapper = styled.div`
  flex: 0.2; /* 20% of the width */
`;

const RightContentWrapper = styled.div`
  flex: 0.8; /* 80% of the width */
`;
