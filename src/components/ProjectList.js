import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Loader from './Loader';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 17px;
  color: white;
`;

const LinkWrapper = styled('div')`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled(LinkWrapper)`
  height: 60px;
  font-size: 24px;
  background-color: wheat;
  margin-bottom: 20px;
`;

const ProjectList = ({ projects, isLoading }) => (
  <div>
    <Header>Projects</Header>
    {isLoading && <Loader />}
    {!isLoading && projects.map(({ id, name, slug }) => (
      <LinkWrapper key={id}>
        <StyledLink to={`/${slug}`}>
          {name}
        </StyledLink>
      </LinkWrapper>
    ))}
  </div>
);

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
