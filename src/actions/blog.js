import {createRequestTypes, action} from './helpers'

export const POST = createRequestTypes('POST');
export const post = {
    request: postSlug => action(POST.REQUEST, {postSlug}),
    success: (postSlug, post, responseCode) => action(POST.SUCCESS, {postSlug, post, responseCode}),
    failure: (postSlug, error) => action(POST.FAILURE, {postSlug, errorCode})
};


export const POST_LIST = createRequestTypes('POST_LIST');
export const postList = {
    request: pageNum => action(POST_LIST.REQUEST, {pageNum}),
    success: (pageNum, postList, responseCode) => action(POST_LIST.SUCCESS, {pageNum, postList, responseCode}),
    failure: (pageNum, errorCode) => action(POST_LIST.FAILURE, {pageNum, errorCode})
};


export const LOAD_POST_LIST = 'LOAD_POST_LIST';
export const loadPostList = (pageNum) => action(LOAD_POST_LIST, {pageNum});

export const LOAD_POST = 'LOAD_POST';
export const loadPost = (postSlug) => action(LOAD_POST, {postSlug});

