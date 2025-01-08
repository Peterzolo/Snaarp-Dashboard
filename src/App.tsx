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

function App() {
  console.log('Theme:', theme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainWrapper>
          <Routes>
            {/* Define your routes here */}
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/" element={<HomePage />} />
            {/* Add more routes as needed */}
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
