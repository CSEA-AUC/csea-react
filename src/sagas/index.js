import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import blogSaga from './blog'
import notesSaga from './notes'

// Root saga
export default function* rootSaga() {
    yield [
        fork(blogSaga),
        fork(notesSaga)
    ]
}