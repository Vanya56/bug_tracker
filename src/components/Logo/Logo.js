import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
  padding: 1rem;
`;

const Logo = () => {
  return <LogoWrapper>Bug Tracker</LogoWrapper>;
};

export default Logo;