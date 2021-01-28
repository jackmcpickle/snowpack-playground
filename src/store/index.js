import { createContext, useContext } from 'react';
import { authReducer, authInitialState} from './authStore';
import errorReducer from './errorStore';

const AppContext = createContext();
const { Provider } = AppContext;

const initialState = {};

export const AppContextProvider = ({...props, children }) => {
  const [authState, authDispatch] = useReducer(authInitialState, authReducer);
  const [errorState, errorDispatch] = useReducer(initialState, errorReducer);

  return (
      <Provider
      values={
            state: {
              ...authState,
              ...errorState
            },
            dispatch: { authDispatch, errorDispatch }
          }
          {...props}>
          {children}
      </Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
