import './App.css';
import styled from 'styled-components';
import Dashboard from './Screens/dashboard/Dashboard';

function App() {
  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );
}

const MainWrapper = styled.div``;

export default App;
