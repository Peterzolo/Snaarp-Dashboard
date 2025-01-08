import React from 'react';
import styled from 'styled-components';
import { SidebarItems } from './components/SideBarItems';

export const SidebarLayout = ({
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
}) => {
  return (
    <MainWrapper>
      <SidebarWrapper isMobileMenuOpen={isMobileMenuOpen}>
        <Logo>Snaarp</Logo>
        <SidebarItems />
      </SidebarWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  overflow: hidden;
`;

const SidebarWrapper = styled.div<{ isMobileMenuOpen: boolean }>`
  border-radius: 10px;
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  color: #a49c9c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  left: ${(props) => (props.isMobileMenuOpen ? '0' : '-250px')};
  top: 0;
  transition: left 0.3s ease;
  z-index: 999;
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #ccc #f5f5f5; /* For Firefox */

  /* Scrollbar styling for Webkit browsers (e.g., Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    width: 250px;
    left: ${(props) => (props.isMobileMenuOpen ? '0' : '-250px')};
  }

  @media (min-width: 992px) {
    position: static;
    left: 0;
    width: 250px;
  }
`;

const Logo = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #262626;
  text-align: center;
  margin-left: 50px;
`;
