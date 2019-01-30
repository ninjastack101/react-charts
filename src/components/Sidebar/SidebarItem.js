import React from 'react';
import styled from 'styled-components';

import StyledLink from '../StyledLink';
import { flexCenteredView } from '../../styles/core';

const Wrapper = styled('div')`
  width: 100%;
  height: 50px;
  ${flexCenteredView}
`;

const SidebarItem = ({ label, to }) => (
  <Wrapper>
    <StyledLink to={to}>
      {label}
    </StyledLink>
  </Wrapper>
);

export default SidebarItem;
