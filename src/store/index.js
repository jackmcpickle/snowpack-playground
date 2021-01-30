import { createContext, useContext } from 'react';
import { appReducer, initialAppState } from './appStore';
import { authReducer, authInitialState} from './authStore';
import { errorReducer, errorInitialState } from './errorStore';

const AppContext = createContext();
const { Provider } = AppContext;

export const AppContextProvider = ({...props, children }) => {
  const [authState, authDispatch] = useReducer(authInitialState, authReducer);
  const [errorState, errorDispatch] = useReducer(errorInitialState, errorReducer);
  const [appState, appDispatch] = useReducer(initialAppState, appReducer);

  return (
      <Provider
      values={{
            state: {
              authState,
              errorState,
              appState,
            },
            dispatch: {
              authDispatch,
              errorDispatch,
              appDispatch
            }
          }}
          {...props}>
          {children}
      </Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
