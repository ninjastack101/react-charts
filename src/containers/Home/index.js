import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';

import FlexBox from '../../components/Flexbox';
import Sidebar from '../../components/Sidebar';
import ProjectList from '../../components/ProjectList';
import PriceChartContainer from './PriceChartContainer';
import getAllProjectsQuery from '../../services/graphql/queries/getAllProjects.graphql';

const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

class Home extends React.Component {
  render() {
    return (
      <Query
        query={gql`${getAllProjectsQuery}`}
        variables={{ pageSize: 10, page: 1 }}
      >
        {({ loading, error, data }) => (
          <Wrapper>
            <Sidebar>
              <ProjectList projects={data && data.allProjects} isLoading={loading}/>
            </Sidebar>
            <PriceChartContainer slug={this.props.match.params.slug} />
          </Wrapper>
        )}
      </Query>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
