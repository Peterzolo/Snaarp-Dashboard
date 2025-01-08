import React from 'react';
import styled from 'styled-components';
import { SelectInput } from '../../../../../Components/SelectInput/SelectInput';

export const LeftSubContentThree = () => {
  return (
    <MainWrapper>
      <SelectInput label="" options={['']} placeholder="Select" />
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
