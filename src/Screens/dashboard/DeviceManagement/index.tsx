import { DashboardLayout } from '../../../Layouts';
import styled from 'styled-components';
import { SubHeader } from '../../../Layouts/DashboardLayout/DashboardLayoutComponents/SubHeader/SubHeader';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';

export const DeviceManagement = () => {
  return (
    <DashboardLayout>
      <MainWrapper>
        <SubHeader />
        <MainContentWrapper>
          <LeftContentWrapper>
            <LeftContent />
          </LeftContentWrapper>
          <RightContentWrapper>
            <RightContent />
          </RightContentWrapper>
        </MainContentWrapper>
      </MainWrapper>
    </DashboardLayout>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: -20px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -15px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 0;
  }
`;

const LeftContentWrapper = styled.div`
  flex: 0.2;
  @media (max-width: 768px) {
    flex: 1;
    margin-bottom: 10px;
  }
`;

const RightContentWrapper = styled.div`
  flex: 0.8;
  @media (max-width: 768px) {
    flex: 1;
  }
`;
