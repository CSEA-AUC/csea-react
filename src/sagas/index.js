import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../services/api'

// Subroutines
// TODO: Check if posts were cached or not in subroutines
// use select to get the state of the app
// See http://stackoverflow.com/questions/38405700/getstate-in-redux-saga
function* loadPostList(action) {
    const {pageNum} = action;
    try {
        const apiData = yield call(api.fetchResource, 'blog/posts/');
        console.log(apiData)
    }
    catch (error) {
        // console.log(error.response.data);
    }
}

// Watchers
function* watchLoadPostList() {
    // while (true) {
    //     const {pageNum} = yield take(actions.LOAD_POST_LIST);
    //     yield fork(loadPostList, pageNum);
    // }
    yield takeEvery(actions.LOAD_POST_LIST, loadPostList);
}

// Root saga
export default function* rootSaga() {
    yield [
        fork(watchLoadPostList)
    ]
}