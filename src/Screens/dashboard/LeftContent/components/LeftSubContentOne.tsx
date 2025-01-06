import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../../../Components/SearchInput';

export const LeftSubContentOne = () => {
  return (
    <MainWrapper>
      <Text>Organizations</Text>
      <SearchInput />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Text = styled.h5``;
