import { GET_ERRORS } from '../actions/types';

export const initialAppState = {
    loading: false,
};

export function appReducer(state, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
