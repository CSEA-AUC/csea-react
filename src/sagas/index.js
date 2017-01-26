import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../services/api'

// Subroutines
// TODO: Check if posts were cached or not in subroutines
// use select to get the state of the app
// See http://stackoverflow.com/questions/38405700/getstate-in-redux-saga
function* loadPostListSaga(action) {
    const {pageNum} = action;
    try {
        yield put(actions.postList.request(pageNum));
        const apiData = yield call(api.fetchResource, 'blog/posts/');
        yield put(actions.postList.success(pageNum, apiData.data.results, apiData.status));
    }
    catch (error) {
        yield put(actions.postList.failure(pageNum, error.status));
    }
}

function* loadPostSaga(action) {
    const {postSlug} = action;
    try {
        yield put(actions.post.request(postSlug));
        const apiData = yield call(api.fetchResource, 'blog/posts/' + postSlug);
        yield put(actions.post.success(postSlug, apiData.data, apiData.status));
    }
    catch (error) {
        yield put(actions.post.failure(postSlug))
    }
}
// Watchers
function* watchLoadPostList() {
    // while (true) {
    //     const {pageNum} = yield take(actions.LOAD_POST_LIST);
    //     yield fork(loadPostList, pageNum);
    // }
    yield takeEvery(actions.LOAD_POST_LIST, loadPostListSaga);
}

function* watchLoadPost() {
    yield takeEvery(actions.LOAD_POST, loadPostSaga)
}

// Root saga
export default function* rootSaga() {
    yield [
        fork(watchLoadPostList),
        fork(watchLoadPost)
    ]
}