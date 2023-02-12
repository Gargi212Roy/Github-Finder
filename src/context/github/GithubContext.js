import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_MYGITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  // like useState we are destructuring from an array, *dispatch* is used to dispatch an action to our reducer
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      header: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    // dispatch takes in an *action* object, type of which will be a string all UPPERCASE
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        // state.users as now we are dealing with the state, dispatch is updating this state
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
