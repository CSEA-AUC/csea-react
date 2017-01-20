import {createRequestTypes, action} from './helpers'

export const POST = createRequestTypes('POST');
export const POST_LIST = createRequestTypes('POST_LIST');

export const post = {
    request: url => action(POST.REQUEST, {url}),
    success: (url, response) => action(POST.SUCCESS, {url, response}),
    failure: (url, error) => action(POST.FAILURE, {url, error})
};

export const postList = {
    request: (url, pageNum) => action(POST_LIST.REQUEST, {url, pageNum}),
    success: (url, pageNum, response) => action(POST_LIST.SUCCESS, {url, pageNum, response}),
    failure: (url, pageNum, response) => action(POST_LIST.failure, {url, pageNum, error})
};

