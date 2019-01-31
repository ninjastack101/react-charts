import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import Loader from '../Loader';

const Wrapper = styled('div')`
  min-width: 300px;
  height: 100%;
  position: relative;
  background-color: black;
`;

const ContentWrapper = styled('div')`
  overflow: auto;
  padding-top: 20px;
  max-height: calc(100% - 80px);
`;

const Sidebar = ({
  headerText,
  sidebarItems,
  isContentLoading,
  selectedSidebarItem,
}) => (
  <Wrapper>
    {headerText && <SidebarHeader>{headerText}</SidebarHeader>}
    <ContentWrapper>
      {isContentLoading && <Loader />}
      {sidebarItems && sidebarItems.map(sidebarItem => (
        <SidebarItem
          key={sidebarItem.id}
          to={sidebarItem.to}
          label={sidebarItem.label}
          active={selectedSidebarItem === sidebarItem.to}
        />
      ))}
    </ContentWrapper>
  </Wrapper>
);

Sidebar.propTypes = {
  headerText: PropTypes.string,
  isContentLoading: PropTypes.bool,
  selectedSidebarItem: PropTypes.string,
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      to: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

export default Sidebar;
