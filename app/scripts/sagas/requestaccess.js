/**
 * @module Sagas/RequestAccess
 * @desc RequestAccess
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Get Repos
 *
 * @param {Object} action
 *
 */
export function* confirm({ payload }) {
  try {
    yield call(request, `${payload.accessInfo}`);
    yield put({
      type: ActionTypes.REQUEST_ACCESS_SUCCESS,
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.REQUEST_ACCESS_FAILURE,
      payload: err,
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.REQUEST_ACCESS, confirm)]);
}
