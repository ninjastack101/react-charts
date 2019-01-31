import renderCandleStickBodyCell from './renderCandleStickBodyCell';

/**
 * Function to render multiple body of candle-stick chart.
 * 
 * @param {Array.<Price>} prices An array of price objects with each object
 *                               containing barchart data and isBullish boolean value.
 */
const renderCandleStickBody = prices => prices.map((price, index) => (
  renderCandleStickBodyCell(`cell-${index}`, price.isBullish)
));

/**
 * Why not a stateless component?
 *
 * Seems `recharts` don't supports wrapped elements and ignores the rendering of
 * those if found.
 *
 * Creating a React component here and passing that to PriceChart like `<CandleStickBody />`
 * won't render anything, and will be simply ignored by recharts.
 */
export default renderCandleStickBody;
