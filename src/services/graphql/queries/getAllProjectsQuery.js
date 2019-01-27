import gql from 'graphql-tag';

const getAllProjectsQuery = gql`
  query ($pageSize: Int, $page: Int) {
    allProjects(pageSize: $pageSize, page: $page) {
      slug
      name
      id
    }
  }
`;

export default getAllProjectsQuery;
