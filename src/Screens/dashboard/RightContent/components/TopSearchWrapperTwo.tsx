import React from 'react';
import styled from 'styled-components';
import { MdSmartphone } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { FaWindows } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';

export const TopSearchWrapperTwo = () => {
  return (
    <MainWrapper>
      <WindowsWrapper>
        <IconWrapper>
          <FaWindows style={{ fontSize: '25px', color: '#1890ff' }} />
        </IconWrapper>
        <Text>Windows</Text>
      </WindowsWrapper>
      <Mac>
        <IconWrapper>
          <FaApple style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text2>Mac</Text2>
      </Mac>
      <Linux>
        <IconWrapper>
          <FaLinux style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text2>Linux</Text2>
      </Linux>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: white;
  padding: 10px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  gap: 15px;
`;
const WindowsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #e6f7ff;
  padding: 10px;
  border-radius: 10px;
`;

const Mac = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Linux = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const IconWrapper = styled.div``;

const Text = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: #1890ff;
`;
const Text2 = styled.p`
  font-weight: 500;
  margin-top: 20px;
`;
