import {createRequestTypes, action} from './helpers'

export const NOTES = createRequestTypes('NOTE');

// Needs to take into account course requested
// maybe add to params to accommodate other filtering fields?
export const notes = {
    request: (courseName) => action(NOTES.REQUEST, {courseName}),
    success: (courseName, notes, responseCode) => action(NOTES.SUCCESS, {courseName, notes, responseCode}),
    failure: (courseName, errorCode) => action(NOTES.FAILURE, {courseName, errorCode})
};


export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = (courseName) => action(LOAD_NOTES, {courseName});

export const SELECT_COURSE = 'SELECT_COURSE';
export const selectCourse = (courseName) => action(SELECT_COURSE, {courseName});

export const COURSES = createRequestTypes('COURSE');
export const courses = {
    request: () => action(COURSES.REQUEST),
    success: (courses, responseCode) => action(COURSES.SUCCESS, {courses, responseCode}),
    failure: (errorCode) => action(COURSES.FAILURE, {errorCode})
};