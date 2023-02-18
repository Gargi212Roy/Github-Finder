import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_MYGITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    // an empty obj by default, when we fetch the user we want to fill it with that user
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  // like useState we are destructuring from an array, *dispatch* is used to dispatch an action to our reducer

  //   get Search Users
  const searchUsers = async (text) => {
    // set LOADing
    const setLoading = () => dispatch({ type: "SET_LOADING" });
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      header: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  // dispatch takes in an *action* object, type of which will be a string all UPPERCASE

  // get single user
  const getUser = async (login) => {
    // set LOADing
    const setLoading = () => dispatch({ type: "SET_LOADING" });
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      header: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // get user Repos
  const getUserRepos = async (login) => {
    // set LOADing
    const setLoading = () => dispatch({ type: "SET_LOADING" });
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        header: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // clear users from state

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        // state.users as now we are dealing with the state, dispatch is updating this state
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
