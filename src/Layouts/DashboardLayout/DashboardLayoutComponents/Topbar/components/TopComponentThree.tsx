import React from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';
import { FaRegCopy } from 'react-icons/fa';

export const TopComponentThree = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <IconWrapper>
          <FaBell
            style={{
              color: '#8c8c8c',
              background: 'none',
              padding: 0,
            }}
          />
        </IconWrapper>

        <AgentCodeWrapper>
          <Text>Agent code:</Text>
          <Code>0365o2j37742y3b38</Code>
        </AgentCodeWrapper>
        <IconWrapper>
          <FaRegCopy
            style={{
              color: '#8c8c8c',
              background: 'none',
              padding: 0,
            }}
          />
        </IconWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 400px;
  padding: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const AgentCodeWrapper = styled.div`
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 5px;
  padding: 10 10 0 10;
  width: 250px;
`;
const Text = styled.p`
  margin-top: 8px;
  font-weight: 500;
`;
const Code = styled.p`
  color: blue;
  margin-top: 8px;
`;

const IconWrapper = styled.div`
  background-color: #f0f0f0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
