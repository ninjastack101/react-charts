import { createSelector } from 'reselect';

export const selectPriceChart = state => state.priceChart;

export const selectPagination = createSelector(
  selectPriceChart,
  priceChart => priceChart.pagination,
);

export const selectFromDate = createSelector(
  selectPriceChart,
  priceChart => priceChart.ohlcChart.from,
);

export const selectToDate = createSelector(
  selectPriceChart,
  priceChart => priceChart.ohlcChart.to,
);
