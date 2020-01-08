import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const requestAccessState = {
  accessConfirm: false,
};

export default {
  requestaccess: handleActions(
    {
      [ActionTypes.REQUEST_ACCESS]: state => immutable(state, {}),
      [ActionTypes.REQUEST_ACCESS_SUCCESS]: state => immutable(state, {
        accessConfirm: { $set: true },
      }),
      [ActionTypes.REQUEST_ACCESS_FAILURE]: state => immutable(state, {
        accessConfirm: { $set: false },
      }),
    },
    requestAccessState
  ),
};
