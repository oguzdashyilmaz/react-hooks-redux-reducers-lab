const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // your code here
  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }
}
