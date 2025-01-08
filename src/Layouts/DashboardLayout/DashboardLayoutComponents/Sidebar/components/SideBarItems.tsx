import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const sidebarItems = [
  { title: 'Dashboard', icon: <FaHome />, link: '/' },
  { title: 'Organization & Reg.', icon: <FaUserAlt />, link: '#' },
  { title: 'Settings', icon: <FaCog />, link: '#' },
  { title: 'Reporting.', icon: <FaUserAlt />, link: '#' },
  { title: 'Billing', icon: <FaUserAlt />, link: '#' },
  { title: 'Account', icon: <FaUserAlt />, link: '#' },
  { title: 'Device Health', icon: <FaUserAlt />, link: '#' },
  { title: 'End Point Mgt Security', icon: <FaUserAlt />, link: '#' },
  {
    title: 'Device Management',
    icon: <FaUserAlt />,
    link: '/device-management',
  },
  { title: 'Website Block', icon: <FaUserAlt />, link: '#' },
  { title: 'Settings', icon: <FaUserAlt />, link: '#' },
];

export const SidebarItems = () => {
  return (
    <SidebarItemsList>
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index}>
          <SidebarLink to={item.link}>
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

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #8c8c8c;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

const SidebarTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
