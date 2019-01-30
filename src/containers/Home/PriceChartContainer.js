import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import FlexBox from '../../components/Flexbox'
import Loader from '../../components/Loader'
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

PriceChartContainer.defaultProps = {
  from: "2018-12-01T14:30:03Z",
  to: "2019-01-01T14:30:03Z",
};

export default PriceChartContainer;
