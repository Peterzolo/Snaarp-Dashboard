import React from 'react';
import styled from 'styled-components';
import { FaTabletAlt } from 'react-icons/fa'; // FontAwesome tablet/device icon

export const SubHeader = () => {
  return (
    <MainWrapper>
      <IconWrapper>
        <FaTabletAlt
          style={{
            color: '#8c8c8c',
            background: 'none',
            padding: 0,
            fontSize: '25px',
          }}
        />
      </IconWrapper>
      <Text>Device management</Text>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 60px;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const IconWrapper = styled.div`
  margin-left: 20px;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
`;
const Text = styled.h3`
  font-weight: 600;
`;
