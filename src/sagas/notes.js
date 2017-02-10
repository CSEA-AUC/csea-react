import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions/notes'
import * as api from '../services/api'

// Load Notes Saga
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

// Select Course Sage
function* SelectCourseSaga(action) {
    yield put(actions.loadNotes(action.courseName))
}

function* watchSelectCourse() {
    yield takeEvery(actions.SELECT_COURSE, SelectCourseSaga);
}

// Notes Saga
export default function* noteSaga() {
    yield [
        fork(watchLoadNotes),
        fork(watchSelectCourse),
    ]
}