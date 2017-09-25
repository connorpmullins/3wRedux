/*************************/
// Action Types

export const SELECT_LIBRARY = 'SELECT_LIBRARY';

/*************************/
// Reducer

export default function selectedReducer(state = null, action) {
  switch (action.type) {
    case SELECT_LIBRARY:
      return action.payload;
    default:
      return state;
  }
};

/*************************/
// Actions

export function selectLibrary(id) {
  return {
    type: SELECT_LIBRARY,
    payload: id
  };
};
