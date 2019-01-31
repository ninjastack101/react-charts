import { combineReducers } from 'redux';
import priceChart from './priceChartReducer';

const reducers = {
  priceChart,
};

export default combineReducers(reducers);
