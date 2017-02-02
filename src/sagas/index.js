import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import blogSaga from './blog'

// Root saga
export default function* rootSaga() {
    yield [
        fork(blogSaga),
    ]
}