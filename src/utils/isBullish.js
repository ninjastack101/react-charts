
/**
 * The function takes a price object and returns true if the ohlc price is bullish.
 * 
 * @param {Object} price object containing open price and close price
 */
const isBullish = price => price.openPriceUsd < price.closePriceUsd;

export default isBullish;
