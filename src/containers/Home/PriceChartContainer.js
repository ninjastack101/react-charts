import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import FlexBox from '../../components/Flexbox'
import Loader from '../../components/Loader'
import H2 from '../../components/H2'
import NativeLink from '../../components/NativeLink'
import PriceChart from '../../components/PriceChart'
import formatOhlcPrice from '../../utils/formatOhlcPrice';
import { flexCenteredView, fullSizeView } from '../../styles/core';
import getOhlcQuery from '../../services/graphql/queries/getOhlcQuery';

const Wrapper = styled(FlexBox)`
  ${flexCenteredView}
  ${fullSizeView}
  position: relative;

  .recharts-wrapper {
    background-color: white;
  }
`;

const ChartWrapper = styled(FlexBox)`
  align-items: center;
`;

const PriceChartContainer = ({ from, to, slug }) => {
  if (!slug) {
    // render notihng if no project is selected from the sidebar.
    return null;
  }

  return (
    <Wrapper column>
      <Query query={getOhlcQuery} variables={{ from, to, slug }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader />;
          }

          if (!error && data) {
            return (
              <ChartWrapper column>
                <H2>OHLC Price Chart</H2>
                <PriceChart isLoading={loading} prices={formatOhlcPrice(data.ohlc)} />
                <NativeLink href="?format=jpeg" target="_blank">
                  Download as JPEG
                </NativeLink>
              </ChartWrapper>
            );
          }

          return null;
        }}
      </Query>
    </Wrapper>
  );
};

PriceChartContainer.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  slug: PropTypes.string,
};

export default PriceChartContainer;
