import React from 'react';
import styled from 'styled-components';
import { FaTabletAlt } from 'react-icons/fa';

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
  margin-top: -13px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-left: -20px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: 50px;
    gap: 10px;
    margin-left: 0;
  }
`;

const IconWrapper = styled.div`
  margin-left: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const Text = styled.h3`
  font-weight: 600;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;
