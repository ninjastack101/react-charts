import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import domToImage from 'dom-to-image';

import FlexBox from '../../components/Flexbox';
import hideableViewStyles from '../../styles/hideableViewStyles';
import { fullSizeView } from '../../styles/core';
import Sidebar from '../../components/Sidebar';
import PriceChartContainer from './PriceChartContainer';

import formatProjectsForSidebar from '../../utils/formatProjectsForSidebar';
import getAllProjectsQuery from '../../services/graphql/queries/getAllProjectsQuery';

const Wrapper = styled(FlexBox)`
  ${fullSizeView}
  ${hideableViewStyles}
`;

class Home extends React.Component {
  saveToPng = async () => {
    const chartElement = document.getElementsByClassName('recharts-wrapper')[0];
    domToImage.toJpeg(chartElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${this.props.match.params.slug}.jpeg`;
        link.href = dataUrl;
        link.click();
        window.close();
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }

  render() {
    return (
      <Query
        query={getAllProjectsQuery}
        variables={{ pageSize: 10, page: 1 }}
      >
        {({ loading, error, data }) => (
          <Wrapper hidden={this.props.downloadMode}>
            <Sidebar
              headerText={'Projects'}
              sidebarItems={formatProjectsForSidebar((data && data.allProjects) || [])}
              isContentLoading={loading}
            />
            <PriceChartContainer slug={this.props.match.params.slug} />
          </Wrapper>
        )}
      </Query>
    );
  }

  componentDidMount() {
    if (this.props.downloadMode) {
      setTimeout(this.saveToPng, 2000);
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  downloadMode: ownProps.location.search.includes('?format=jpeg'),
});

Home.propTypes = {
};

export default connect(mapStateToProps)(Home);
