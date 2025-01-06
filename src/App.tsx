import styled, { ThemeProvider } from 'styled-components';
import { Dashboard } from './Screens/dashboard';
import { theme } from './utils/theme';

function App() {
  console.log('Theme:', theme);
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Dashboard />
      </MainWrapper>
    </ThemeProvider>
  );
}

const MainWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: ${({ theme }) => theme.mainBgColor}; */
  background-color: #f0f0f0;
`;

export default App;
