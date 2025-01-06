import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const TopBarLayout = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  return (
    <TopBarWrapper>
      <h2>Dashboard</h2>
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
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none; /* Hide it on desktop */
  @media (max-width: 768px) {
    display: block; /* Show it on mobile */
  }
`;
