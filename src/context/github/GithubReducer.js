const githubReducer = (state, action) => {
  // action---> object that has a type of string
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,

        // our current state is *state*, so we'll spread across anything that is already in our state, doing the same thing as the default case except that we define an object and manually spread across the current state that is already over there
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
