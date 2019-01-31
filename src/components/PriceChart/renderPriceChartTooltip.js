import React from 'react';
import { Tooltip } from 'recharts';

export const formatPriceChartTooptip = (value, field, props) => {
  const fieldName = `${field}Usd`;
  return props.payload[fieldName];
}

const renderPriceChartTooltip = () => (
  <Tooltip formatter={formatPriceChartTooptip} />
);


/**
 * Why not a stateless component?
 *
 * Seems `recharts` don't supports wrapped elements and ignores the rendering of
 * those if found.
 *
 * Creating a React component here and passing that to PriceChart like `<PriceChartTooltip />`
 * won't render anything, and will be simply ignored by recharts.
 */
export default renderPriceChartTooltip;
