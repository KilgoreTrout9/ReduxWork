import * as actions from './actionTypes';

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description
  }
});

export const bugFixed = id => ({
  type: actions.BUG_FIXED,
  payload: {
    id
  }
})

export const bugRemoved = id => ({
  type: actions.BUG_REMOVED,
  payload: {
    id
  }
});
