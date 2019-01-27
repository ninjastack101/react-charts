import gql from 'graphql-tag';

const getOhlcQuery = gql`
  query ($from: DateTime, $to: DateTime, $slug: String) {
    ohlc(from: $from, to: $to, slug: $slug) {
      datetime
      openPriceUsd
      closePriceUsd
      lowPriceUsd
      highPriceUsd
    }
  }
`;

export default getOhlcQuery;
