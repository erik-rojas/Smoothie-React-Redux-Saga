// @flow
/**
 * @module Actions/RequestAccess
 * @desc RequestAccess Actions
 */

import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  requestAccess: accessConfirm,
} = createActions({
  [ActionTypes.REQUEST_ACCESS]: (accessInfo) => ({ accessInfo }),
});
