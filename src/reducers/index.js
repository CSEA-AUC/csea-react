import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import * as types from '../actions/blog';

// TODO: Remove nextUrl and prevUrl, keep track of only pageNum
const initialState = {
    postsLists: {
        1: {
            id: 1,
            results: [],
            isFetching: true,
            responseCode: null
        }
    },
    pageNum: 1,
    nextUrl: '',
    prevUrl: '',

    postsBySlug: {}
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

        case types.POST.REQUEST:
        case types.POST.SUCCESS:
        case types.POST.FAILURE:
            return {...state, postsBySlug: post(state.postsBySlug, action)}
    }
    return state;
}

function post(state = initialState, action) {
    switch (action.type) {
        case types.POST.REQUEST:
            return {
                ...state, [action.postSlug]: {
                    postSlug: action.postSlug,
                    isFetching: true,
                    responseCode: null
                }
            };
        case types.POST.SUCCESS:
            return {
                ...state, [action.postSlug]: {
                    postSlug: action.postSlug,
                    isFetching: false,
                    responseCode: action.responseCode,
                    ...action.post
                }
            };

        case types.POST.FAILURE:
            return {
                ...state, [action.postSlug]: {
                    postSlug: action.postSlug,
                    isFetching: false,
                    responseCode: action.errorCode
                }
            }
    }
    return state;
}

export default combineReducers({
    blog,
    routing: routerReducer
})