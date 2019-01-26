import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query {
    allProjects {
      slug
      name
    }
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => (
          <div>
            Home
            {console.log('===loading======', loading)}
            {console.log('===error======', error)}
            {console.log('===data======', data)}
          </div>
        )}
      </Query>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
