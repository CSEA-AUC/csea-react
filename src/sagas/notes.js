import {takeEvery, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions/notes'
import * as api from '../services/api'

// Load Notes Saga
function* loadNotesSaga(action) {
    try {
        // load list of available courses
        yield put(actions.courses.request());
        let apiData = yield call(api.fetchResource, 'notes/courses/');
        yield put(actions.courses.success(apiData.data, apiData.status));

        // Retrieve list of notes corresponding to the first entry of the availables courses
        const initialCourse = apiData.data[0];
        const initialCourseData = {
            course_prefix: initialCourse.prefix,
            course_three_digits: initialCourse.three_digits,
            course_four_digits: initialCourse.four_digits
        };

        yield put(actions.selectCourse(initialCourseData));
    }

    catch (error) {
        yield put(actions.notes.failure(error.status));
    }
}

function* watchLoadNotes() {
    yield takeEvery(actions.LOAD_NOTES, loadNotesSaga);
}


function* selectCourseSaga(action) {
    try {
        const courseData = action.course;

        const courseName = courseData.course_prefix + courseData.course_three_digits;
        yield put(actions.notes.request(courseName));
        const apiData = yield call(api.fetchResource, 'notes/', courseData);
        yield put(actions.notes.success(courseName, apiData.data.results, apiData.status));
    }
    catch (error) {
        yield put(actions.notes.failure(error.status));
    }
}

function* watchSelectCourse() {
    yield takeEvery(actions.SELECT_COURSE, selectCourseSaga);
}

// Notes Saga
export default function* noteSaga() {
    yield [
        fork(watchLoadNotes),
        fork(watchSelectCourse)
        // fork(watchLoadAvailableCourses),
    ]
}