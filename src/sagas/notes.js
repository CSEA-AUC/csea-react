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
        const initialCourseData = apiData.data[0];

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

        const courseName = courseData.prefix + courseData.three_digits;

        // notes api of backend expects a certain format for filtering of notes
        const retrievalCourseData = {
            course_prefix: courseData.prefix,
            course_three_digits: courseData.three_digits,
            course_four_digits: courseData.four_digits
        };

        console.log(retrievalCourseData);
        yield put(actions.notes.request(courseName));
        const apiData = yield call(api.fetchResource, 'notes/', retrievalCourseData);
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