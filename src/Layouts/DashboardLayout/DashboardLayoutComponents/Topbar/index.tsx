import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { TopComponentOne } from './components/TopComponentOne';
import { TopComponentTwo } from './components/TopComponentTwo';
import { TopComponentThree } from './components/TopComponentThree';

export const TopBarLayout = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  return (
    <TopBarWrapper>
      <TopContentWrapper>
        <TopComponentOne />
        <TopComponentTwo />
        <TopComponentThree />
      </TopContentWrapper>
      <HamburgerIcon onClick={toggleSidebar}>
        <FaBars />
      </HamburgerIcon>
    </TopBarWrapper>
  );
};

const TopBarWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: 60px;
  @media (max-width: 768px) {
    padding: 10px 15px;
    height: auto;
  }
`;

const TopContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none; /* Hide it on desktop */
  @media (max-width: 768px) {
    display: block; /* Show it on mobile */
  }
`;
