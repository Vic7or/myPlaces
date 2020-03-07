const initialState = { User: [] };
function toggleUser(state = initialState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = {
        ...state,
        User: [...state.User, action.value],
      };
      return nextState || state;
  }
}
export default toggleUser;
