import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

import renderPriceChartTooltip from './renderPriceChartTooltip';
import renderCandleStickBody from './renderCandleStickBody';
import { fullSizeView } from '../../styles/core';

// recharts don't accepts a complete style object but
// separate props for width, height and margin.
export const priceChartDefaultProps = {
  width: 800,
  height: 400,
  margin: {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  },
};

const Wrapper = styled('div')`
  ${fullSizeView}
  margin: 20px auto;
`;

const PriceChart = ({ prices, overrideProps }) => (
  <Wrapper id="ohlc-chart">
    <BarChart
      data={prices}
      {...priceChartDefaultProps}
      {...overrideProps}
    >
      <Bar dataKey="lowPrice" stackId="a" fill="#000000" maxBarSize={0} />
      <Bar dataKey="openPrice" stackId="a" fill="#000000" maxBarSize={2} />
      <Bar dataKey="closePrice" stackId="a">
        {renderCandleStickBody(prices)}
      </Bar>
      <Bar dataKey="highPrice" stackId="a" fill="#000000" maxBarSize={2} />
      {renderPriceChartTooltip()}
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
    </BarChart>
  </Wrapper>
);

PriceChart.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      datetime: PropTypes.string,
      closePriceUsd: PropTypes.number,
      highPriceUsd: PropTypes.number,
      lowPriceUsd: PropTypes.number,
      openPriceUsd: PropTypes.number,
    })
  ),
  overrideProps: PropTypes.object,
};

PriceChart.defaultProps = {
  prices: [],
  overrideProps: {},
};

export default PriceChart;
