import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const sidebarItems = [
  { title: 'Dashboard', icon: <FaHome />, link: '/' },
  { title: 'Endpoint Mgt Sec.', icon: <FaUserAlt />, link: '/endpoint-mgt' },
  {
    title: 'Device Management',
    icon: <FaUserAlt />,
    link: '/device-management',
  },
  { title: 'Organization & Reg.', icon: <FaUserAlt />, link: '/organization' },
  { title: 'Reporting.', icon: <FaUserAlt />, link: '/reporting' },
  { title: 'Settings', icon: <FaCog />, link: '/setting' },
  { title: 'Billing.', icon: <FaUserAlt />, link: '/billing' },
  { title: 'Account.', icon: <FaUserAlt />, link: '/account' },
  { title: 'Device Health.', icon: <FaUserAlt />, link: '/device-health' },
];

export const SidebarItems = () => {
  const location = useLocation();

  return (
    <SidebarItemsList>
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index}>
          <SidebarLink
            to={item.link}
            $isActive={location.pathname === item.link}
          >
            <SidebarIcon>{item.icon}</SidebarIcon>
            <SidebarTitle>{item.title}</SidebarTitle>
          </SidebarLink>
        </SidebarItem>
      ))}
    </SidebarItemsList>
  );
};

// Styled components

const SidebarItemsList = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
`;

const SidebarItem = styled.li`
  width: 100%;
  margin-bottom: 20px;
`;

const SidebarLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#007bff' : '#8c8c8c')};
  background-color: ${(props) => (props.$isActive ? '#e8f4ff' : 'transparent')};
  border-radius: 5px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => (props.$isActive ? '#e8f4ff' : '#f0f0f0')};
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

const SidebarTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
