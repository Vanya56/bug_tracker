import React, { useState } from 'react';
import styled from 'styled-components';

import Heading from '../../components/UI/Headings/Heading';
import { Container } from '../../hoc/layout/elements/';
import NewIssue from './NewIssue/NewIssue';
const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`

const Bugs = () => {
  return ( <Wrapper>
    <Container>
    <InnerWrapper>
    <Heading size='h1' color='white'>
    BUG TRACKER
    </Heading>
    <Heading bold size='h4' color='white'>
    CURRENT ISSUES
    </Heading>
    <NewIssue />
    </InnerWrapper>
    </Container>
    </Wrapper>
  );
};

export default Bugs;