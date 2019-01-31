import React from 'react';
import { Cell } from 'recharts';

export const formatPriceChartTooptip = (value, field, props) => {
  const fieldName = `${field}Usd`;
  return props.payload[fieldName];
};

/**
 * Function to render Body of candle-stick for specific day.
 * If isBullish flag is true, the body background is set to green, otherwise, red.
 * 
 * @param {String|Number} id a unique id for Cell
 * @param {Boolean} isBullish a flag to show if ohlc price is bullish for the day.
 */
const renderCandleStickBodyCell = (id, isBullish) => (
  <Cell key={id} fill={isBullish ? '#00ff00' : '#ff0000'} />
);

/**
 * Why not a stateless component?
 * 
 * Seems `recharts` don't supports wrapped elements and ignores the rendering of
 * those if found.
 * 
 * Creating a React component here and passing that to CandleStickBody like
 * `<CandleStickBodyCell />` doesn't render anything, and gets simply ignored.
 */
export default renderCandleStickBodyCell;
