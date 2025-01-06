import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../../../../Components/SearchInput';

export const TopComponentTwo = () => {
  return (
    <MainWrapper>
      <SearchInput
        placeholder="Search for files and filders"
        width="350px"
        responsiveWidth="90%"
        height="40px"
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
