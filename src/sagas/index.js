import {take, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions'

// Subroutines

function* loadPostList(url, pageNum) {
    "use strict";

}

// Watchers
function* watchLoadPostsList() {
    while (true) {
        const what = yield take(actions.LOAD_POST_LIST);
        yield console.log(what);
    }
}

// Root saga
export default function* rootSaga() {
    yield [
        fork(watchLoadPostsList)
    ]
}