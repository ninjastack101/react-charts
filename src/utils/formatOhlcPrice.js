import moment from 'moment';

const formatOhlcPrice = prices => {
  return prices.map((price) => ({
    ...price,
    date: moment(price.datetime).format("MMM DD"),

  }))
}

export default formatOhlcPrice;
