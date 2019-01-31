import { createSelector } from 'reselect';

/**
 * Function to return params from the current location url
 *
 * @param {Object} props Object containing `match` property
 */
export const selectMatchParams = props => props.match.params;

export const createParamSelector = (props, paramKey) => createSelector(
  () => selectMatchParams(props),
  params => params[paramKey],
);
