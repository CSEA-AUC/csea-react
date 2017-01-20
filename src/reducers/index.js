import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import * as types from '../actions';

const initialState = {
    postList: {
        isFetching: false,
        posts: [],
    },
    currentPost: {}
};

function postListReducer(state = initialState.postList, action) {
    switch(action.type) {
        case types.POST_LIST.REQUEST:
            return {...state, isFetching: true};
        case types.POST_LIST.SUCCESS:
            console.log(action.response);
            return {...state, isFetching: false};
        case types.POST_LIST.FAILURE:
            console.log(actions.error);
            return {...state, isFetching: false};
    }
    return state;
}

export default combineReducers({
    blogState: postListReducer,
    routing: routerReducer
})