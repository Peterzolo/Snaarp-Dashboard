import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Dashboard } from './Screens/dashboard';
import { theme } from './utils/theme';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Setting';

function App() {
  console.log('Theme:', theme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainWrapper>
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.mainBgColor || '#f0f0f0'};
`;

export default App;
