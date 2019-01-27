import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import FlexBox from '../../components/Flexbox'
import Loader from '../../components/Loader'
import PriceChart from '../../components/PriceChart'
import formatOhlcPrice from '../../utils/formatOhlcPrice';

import getOhlcQuery from '../../services/graphql/queries/getOhlcQuery';

const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  .recharts-wrapper {
    background-color: white;
  }
`;

const PriceChartContainer = ({ from, to, slug }) => {
  if (!slug) {
    return null;
  }

  return (
    <Wrapper>
      <Query query={getOhlcQuery} variables={{ from, to, slug }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader />;
          }

          if (!error && data) {
            return <PriceChart isLoading={loading} prices={formatOhlcPrice(data.ohlc)} />;
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
