import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions/notes'
import * as api from '../services/api'

function* loadNotesSaga(action) {
    try {
        yield put(actions.notes.request());
        const apiData = yield call(api.fetchResource, 'notes/');
        yield put(actions.notes.success(apiData.data.results, apiData.status));
    }
    catch (error) {
        yield put(actions.notes.failure(error.status));
    }
}

function* watchLoadNotes() {
    yield takeEvery(actions.LOAD_NOTES, loadNotesSaga);
}

// Notes Saga
export default function* noteSaga() {
    yield [
        fork(watchLoadNotes),
    ]
}