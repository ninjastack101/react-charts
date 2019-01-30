import React from 'react';
import PropTypes from 'prop-types';
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

SidebarItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

export default SidebarItem;
