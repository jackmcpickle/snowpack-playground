import { isEmpty } from 'lodash';
import { SET_CURRENT_USER, USER_LOADING } from '../actions/types';

export const authInitialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
};

export function authReducer(state, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
