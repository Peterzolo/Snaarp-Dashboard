import React from 'react';
import styled from 'styled-components';
import { MdSmartphone } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';

export const TopSearchWrapperOne = () => {
  return (
    <MainWrapper>
      <MobileWrapper>
        <IconWrapper>
          <MdSmartphone style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text>Mobile</Text>
      </MobileWrapper>
      <ComputerWrapper>
        <IconWrapper>
          <MdComputer style={{ fontSize: '25px' }} />
        </IconWrapper>
        <Text2>Computer</Text2>
      </ComputerWrapper>
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
const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ComputerWrapper = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #e6f7ff;
  padding: 10px;
  border-radius: 10px;
`;
const IconWrapper = styled.div``;

const Text = styled.p`
  font-weight: 500;
  margin-top: 20px;
`;
const Text2 = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: blue;
`;
