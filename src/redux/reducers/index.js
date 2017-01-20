import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import * as actions from '../actions';

const initialState = {
    postList: {
        isLoading: false,
        posts: [],
    },
    currentPost: {}
};

function blogState(state = initialState, action) {
    switch(action.type) {

    }
    return state;
}

export default combineReducers({
    blogState,
    routing: routerReducer
})