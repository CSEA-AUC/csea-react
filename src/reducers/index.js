import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import * as types from '../actions';

const initialState = {
    postsLists: {
        1: {
            results: []
        }
    },
    pageNum: 1,
    nextUrl: '',
    prevUrl: '',
    postsBySlug: [],
    selectedPost: '',
};


const newPostsLists = pageNum => ({
    id: pageNum,
    results: [],
    isFetching: true,
    responseCode: null,
});

function blog(state = initialState, action) {
    const {pageNum} = action;

    switch (action.type) {
        case types.POST_LIST.REQUEST:
            return {...state, postsLists: {...state.postsLists, [pageNum]: newPostsLists(pageNum)}};

        case types.POST_LIST.SUCCESS: {
            const postsLists = {
                ...state.postsLists,
                [pageNum]: {
                    ...state.postsLists[pageNum],
                    results: action.postList,
                    isFetching: false,
                    responseCode: action.responseCode
                }
            };
            return {...state, postsLists: postsLists};
        }
        case types.POST_LIST.FAILURE: {
            const postsLists = {
                ...state.postsLists,
                [pageNum]: {
                    ...state.postsLists[pageNum],
                    isFetching: false,
                    responseCode: action.errorCode
                }
            };
            return {...state, postsLists: postsLists};
        }
    }
    return state;
}

function post(state = initialState, action) {
    return state;
}

export default combineReducers({
    blog,
    routing: routerReducer
})