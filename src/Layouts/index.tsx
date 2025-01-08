import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { SidebarLayout } from './DashboardLayout/DashboardLayoutComponents/Sidebar';
import { TopBarLayout } from './DashboardLayout/DashboardLayoutComponents/Topbar';
import { SubHeader } from './DashboardLayout/DashboardLayoutComponents/SubHeader/SubHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <MainWrapper>
      <SidebarLayout isMobileMenuOpen={isMobileMenuOpen} />
      <ContentWrapper>
        <TopBarLayout toggleSidebar={toggleSidebar} />
        <MainContentWrapper>{children}</MainContentWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  gap: 10px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 1200px;
  }
`;

const MainContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;
