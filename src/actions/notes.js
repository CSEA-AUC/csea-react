import {createRequestTypes, action} from './helpers'

export const NOTES = createRequestTypes('NOTE');

// Needs to take into account course requested
// maybe add to params to accommodate other filtering fields?
export const notes = {
    request: (course) => action(NOTES.REQUEST, {course}),
    success: (course, notes, responseCode) => action(NOTES.SUCCESS, {course, notes, responseCode}),
    failure: (course, errorCode) => action(NOTES.FAILURE, {course, errorCode})
};


export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = () => action(LOAD_NOTES);

export const SELECT_COURSE = 'SELECT_COURSE';
export const selectCourse = (course) => action(SELECT_COURSE, {course});


// Used by notes saga
export const LOAD_AVAILABLE_COURSES = 'LOAD_NOTES';
export const loadAvailableCourses = () => action(LOAD_AVAILABLE_COURSES);

// Used by notes reducer
export const COURSES = createRequestTypes('COURSE');
export const courses = {
    request: () => action(COURSES.REQUEST),
    success: (courses, responseCode) => action(COURSES.SUCCESS, {courses, responseCode}),
    failure: (errorCode) => action(COURSES.FAILURE, {errorCode})
};