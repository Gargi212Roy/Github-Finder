import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducers";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //   set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {/*setAlert---> now we can bring setAlert in whenever we want to acll an alert, we can bring that into the component to fire it off
        state---> whenever we pass in as a (meg, type) will get passed into this, the alert state and we can show it wherever we want
        */}
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
