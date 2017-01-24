import {createRequestTypes, action} from './helpers'

// constants
export const POST = createRequestTypes('POST');
export const POST_LIST = createRequestTypes('POST_LIST');

export const LOAD_POST_LIST = 'LOAD_POST_LIST';
export const SELECT_POST = 'SELECT_POST';

// Action creators
export const post = {
    request: url => action(POST.REQUEST, {url}),
    success: (url, response) => action(POST.SUCCESS, {url, response}),
    failure: (url, error) => action(POST.FAILURE, {url, error})
};

export const postList = {
    request: (pageNum) => action(POST_LIST.REQUEST, {pageNum}),
    success: (pageNum, postList, responseCode) => action(POST_LIST.SUCCESS, {pageNum, postList, responseCode}),
    failure: (pageNum, errorCode) => action(POST_LIST.FAILURE, {pageNum, errorCode})
};

export const loadPostList = (pageNum) => action(LOAD_POST_LIST, {pageNum});
export const selectPost = (slug) => action(SELECT_POST, {slug});