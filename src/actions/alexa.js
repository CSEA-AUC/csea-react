import {createRequestTypes, action} from './helpers'

export const ALEXAGROUPS = createRequestTypes('ALEXAGROUP');

// Needs to take into account course requested
// maybe add to params to accommodate other filtering fields?
export const alexaGroups = {
    request: () => action(ALEXAGROUPS.REQUEST),
    success: (groups, responseCode) => action(ALEXAGROUPS.SUCCESS, {groups, responseCode}),
    failure: (groups, errorCode) => action(ALEXAGROUPS.FAILURE, {groups, errorCode})
};


export const LOAD_ALEXAGROUPS = 'LOAD_ALEXAGROUPS';
export const loadAlexaGroups = () => action(LOAD_ALEXAGROUPS);

export const JOIN_ALEXAGROUP = 'JOIN_ALEXAGROUP';
export const selectCourse = (uid) => action(JOIN_ALEXAGROUP, {uid});


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