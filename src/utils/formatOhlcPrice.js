import moment from 'moment';

/**
 * A function that accepts prices as an array of objects, where each object
 * has keys closePriceUsd, datetime, highPriceUsd, lowPriceUsd and openPriceUsd.
 * 
 * @param {Array.<Project>} projects Array of projects.
 * @returns An array of objects with each object having additional key date
 *          formatted in 'MMM DD' format.
 */
const formatOhlcPrice = prices => {
  return prices.map((price) => ({
    ...price,
    date: moment(price.datetime).format("MMM DD"),
  }))
}

export default formatOhlcPrice;
