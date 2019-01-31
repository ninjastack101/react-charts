import moment from 'moment';
import isBullish from './isBullish';

/**
 * A function that accepts prices as an array of objects, where each object
 * has keys closePriceUsd, datetime, highPriceUsd, lowPriceUsd and openPriceUsd.
 * 
 * @param {Array.<Project>} projects Array of projects.
 * @returns An array of objects with each object having additional key date
 *          formatted in 'MMM DD' format.
 */
const formatOhlcPrice = prices => {
  return prices.map((price) => {
    const bullish = isBullish(price);
    const lowPrice = price.lowPriceUsd;
    const openPrice = (bullish ? price.openPriceUsd : price.closePriceUsd) - (price.lowPriceUsd);
    const closePrice = bullish ? price.closePriceUsd - price.openPriceUsd : price.openPriceUsd - price.closePriceUsd;
    const highPrice = price.highPriceUsd - (bullish ? price.closePriceUsd : price.openPriceUsd);

    return {
      ...price,
      lowPrice,
      openPrice,
      closePrice,
      highPrice,
      isBullish: isBullish(price),
      date: moment(price.datetime).format("MMM DD"),
    };
  });
}

export default formatOhlcPrice;
