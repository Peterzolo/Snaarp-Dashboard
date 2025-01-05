// import './App.css';
import styled from 'styled-components';
import { Dashboard } from './Screens/dashboard/Dashboard';

function App() {
  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
