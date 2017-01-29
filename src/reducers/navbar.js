import * as types from '../actions';

const initialState = {
    fixed: true
};

export default function navbarReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_NAVBAR_FIXED:
            return {...state, fixed: true};
        case types.SET_NAVBAR_STATIC:
            return {...state, fixed: false}
    }
    return state;
}