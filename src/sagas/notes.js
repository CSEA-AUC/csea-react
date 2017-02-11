import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions/notes'
import * as api from '../services/api'

// Load Notes Saga

function* loadNotes(courseData) {
    const courseName = courseData.prefix + courseData.three_digits;

    yield put(actions.notes.request(initialCourseName));
    const apiData = yield call(api.fetchResource, 'notes/', initialCourseData);
    yield put(actions.notes.success(initialCourseName ,apiData.data.results, apiData.status));
}
function* loadNotesSaga(action) {
    try {
        // load list of available courses
        yield put(actions.courses.request());
        let apiData = yield call(api.fetchResource, 'notes/courses/');
        yield put(actions.courses.success(apiData.data, apiData.status));

        // Retrieve list of notes corresponding to the first entry of the availables courses
        const initialCourse = apiData.data[0];
        const initialCourseName = initialCourse.prefix + initialCourse.three_digits;
        const initialCourseData = {
            course_prefix: initialCourse.prefix,
            course_three_digits: initialCourse.three_digits,
            course_four_digits: initialCourse.four_digits
        };

        yield put(actions.selectCourse(initialCourseData));

        yield put(actions.notes.request(initialCourseName));
        apiData = yield call(api.fetchResource, 'notes/', initialCourseData);
        yield put(actions.notes.success(initialCourseName ,apiData.data.results, apiData.status));
    }

    catch (error) {
        yield put(actions.notes.failure(error.status));
        yield put(actions.courses.failure(error.status));
    }
}

function* watchLoadNotes() {
    yield takeEvery(actions.LOAD_NOTES, loadNotesSaga);
}

// Select Course Sage
function* loadAvailableCoursesSaga(action) {
    try {
        yield put(actions.courses.request());
        const apiData = yield call(api.fetchResource, 'notes/courses/');
        console.log(apiData);
        yield put(actions.courses.success(apiData.data.results, apiData.status));
    }
    catch (error) {
        yield put(actions.courses.failure(error.status));
    }
}

function* watchLoadAvailableCourses() {
    yield takeEvery(actions.LOAD_AVAILABLE_COURSES, loadAvailableCoursesSaga);
}

// Notes Saga
export default function* noteSaga() {
    yield [
        fork(watchLoadNotes),
        // fork(watchLoadAvailableCourses),
    ]
}