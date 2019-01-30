import React from 'react';
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

const Sidebar = ({ children, headerText, sidebarItems, isContentLoading }) => (
  <Wrapper>
    {headerText && <SidebarHeader>{headerText}</SidebarHeader>}
    <ContentWrapper>
      {isContentLoading && <Loader />}
      {sidebarItems && sidebarItems.map(sidebarItem => (
        <SidebarItem
          key={sidebarItem.to}
          to={sidebarItem.to}
          label={sidebarItem.label}
        />
      ))}
    </ContentWrapper>
  </Wrapper>
);

export default Sidebar;
