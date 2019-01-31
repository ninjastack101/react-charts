import React from 'react';
import PropTypes from 'prop-types';
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
import withDownloadMode from '../../utils/withDownloadMode';
import getAllProjectsQuery from '../../services/graphql/queries/getAllProjectsQuery';
import { createParamSelector } from '../../selectors/locationSelectors';
import {
  selectToDate,
  selectFromDate,
  selectPagination,
} from '../../selectors/priceChartSelectors';

const Wrapper = styled(FlexBox)`
  ${fullSizeView}
  ${hideableViewStyles}
`;

class Home extends React.Component {
  /**
   * Function to save the rendered chart as JPEG.
   */
  saveToJpeg = async () => {
    const chartElement = document.getElementById('ohlc-chart');
    domToImage.toJpeg(chartElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${this.props.match.params.slug}.jpeg`;
        link.href = dataUrl;
        link.click();
        setTimeout(window.close, 500); // closing immediately skips download sometimes.
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  };

  render() {
    return (
      <Query
        query={getAllProjectsQuery}
        variables={{
          pageSize: this.props.pagination.pageSize,
          page: this.props.pagination.page,
        }}
      >
        {({ loading, error, data }) => (
          <Wrapper hidden={this.props.downloadMode}>
            <Sidebar
              headerText={'Projects'}
              sidebarItems={formatProjectsForSidebar((data && data.allProjects) || [])}
              selectedSidebarItem={this.props.slug}
              isContentLoading={loading}
            />
            <PriceChartContainer
              slug={this.props.slug}
              from={this.props.fromDate}
              to={this.props.toDate}
            />
          </Wrapper>
        )}
      </Query>
    );
  }

  componentDidMount() {
    if (this.props.downloadMode) {
      /**
       * TODO: Didn't found any event like onFinishAnimation from recharts.
       * Should be optimized in future.
       */ 
      setTimeout(this.saveToJpeg, 2000);
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  fromDate: selectFromDate(state),
  toDate: selectToDate(state),
  pagination: selectPagination(state),
  slug: createParamSelector(ownProps, 'slug')(state),
});

Home.propTypes = {
  downloadMode: PropTypes.bool,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  slug: PropTypes.string,
};

export default withDownloadMode(connect(mapStateToProps)(Home));
