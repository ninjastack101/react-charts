import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const ProjectList = ({ projects }) => (
  projects.map(({ id, name, slug }) => (
    <LinkWrapper key={id}>
      <StyledLink to={`/${slug}`}>
        {name}
      </StyledLink>
    </LinkWrapper>
  ))
);

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
