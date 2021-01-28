import { GET_ERRORS } from '../actions/types';

export const errorInitialState = {};

export function errorReducer(state, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
