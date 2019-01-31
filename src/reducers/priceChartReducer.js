
export const initialState = {
  pagination: {
    pageSize: 10,
    page: 1,
  },
  ohlcChart: {
    from: "2018-12-01T14:30:03Z",
    to: "2019-01-01T14:30:03Z",
  },
};

const priceChartReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default priceChartReducer;
