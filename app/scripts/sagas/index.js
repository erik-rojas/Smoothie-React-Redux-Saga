import { all, fork } from 'redux-saga/effects';

import app from './app';
import user from './user';
import requestaccess from './requestaccess';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(app),
    fork(user),
    fork(requestaccess),
  ]);
}
