import React from 'react';
import styled from 'styled-components';
import { SidebarItems } from './components/SideBarItems';

export const SidebarLayout = ({
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
}) => {
  return (
    <SidebarWrapper isMobileMenuOpen={isMobileMenuOpen}>
      <Logo>Snaarp</Logo>
      <SidebarItems />
    </SidebarWrapper>
  );
};

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
