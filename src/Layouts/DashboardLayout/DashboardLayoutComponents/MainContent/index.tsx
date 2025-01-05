import React from 'react';
import styled from 'styled-components';

export const MainContentLayout = () => {
  return (
    <ContentWrapper>
      <p>
        Main content goes here. Add your dashboard information or any other
        details here.
      </p>
      <p>More content to test scrollable behavior...</p>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f7f9fb;
`;
