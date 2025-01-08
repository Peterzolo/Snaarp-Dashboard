import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { HomePage } from './Screens/dashboard/Home/HomePage';
import { DeviceManagement } from './Screens/dashboard/DeviceManagement';
import { Organization } from './Screens/dashboard/Organization/Organization.';
import { Settings } from './Screens/dashboard/Setting/Settings';
import { Reporting } from './Screens/dashboard/Reporting/Reporting';
import { Billing } from './Screens/dashboard/Billing/Billing';
import { Account } from './Screens/dashboard/Account/Account';
import { EndpointMgt } from './Screens/dashboard/EndpointMgt/EndpointMgt';
import { Devicehealth } from './Screens/dashboard/DeviceHealth/DeviceHealth';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainWrapper>
          <Routes>
            <Route path="/organization" element={<Organization />} />
            <Route path="/endpoint-mgt" element={<EndpointMgt />} />
            <Route path="/account" element={<Account />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/device-health" element={<Devicehealth />} />
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainWrapper>
      </Router>
    </ThemeProvider>
  );
}

const MainWrapper = styled.div`
  padding: 10px;
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.mainBgColor || '#f0f0f0'};
`;

export default App;
