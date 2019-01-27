import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

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

const PriceChart = ({ prices, overrideProps }) => (
  <BarChart
    data={prices}
    {...priceChartDefaultProps}
    {...overrideProps}
  >
  <CartesianGrid strokeDasharray="5 10"/>
  <XAxis dataKey="date" />
  <YAxis/>
  <Tooltip/>
  <Legend />
  <Bar width={10} dataKey="lowPriceUsd" stackId="a" fill="transparent" />
  <Bar dataKey="highPriceUsd" stackId="a" fill="#82ca9d" />
  </BarChart>
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
